package com.orfac.lab.controller;

import com.orfac.lab.auth.UserPrincipalImpl;
import com.orfac.lab.model.Point;
import com.orfac.lab.model.User;
import com.orfac.lab.repository.PointRepository;
import com.orfac.lab.repository.UserRepository;
import com.orfac.lab.request.PointCheckRequest;
import com.orfac.lab.service.PointChecker;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.ui.ModelMap;
import org.springframework.validation.BindingResult;
import org.springframework.validation.Validator;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.List;

@CrossOrigin(value = "http://localhost:3000", maxAge = 3600)
@RestController(value = "/api")
@RequestMapping("/api")
public class MainController {

    @Autowired
    private PointChecker checker;

    @Autowired
    @Qualifier("pointCheckValidator")
    private Validator pointValidator;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PointRepository pointRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;


    @ModelAttribute("user")
    public User getUser() {
        Object o = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        if (o instanceof UserPrincipalImpl) {
            return userRepository.findByLogin(((UserPrincipalImpl) o).getUsername());
        } else {
            return null;
        }
    }

    @RequestMapping(value = "register", method = RequestMethod.POST)
    public String register(@RequestParam String login, @RequestParam String password) {
        User user = userRepository.findByLogin(login);
        if (password == null || password.trim().isEmpty()) {
            return "{\"error\": \"password can't be empty\"}";
        }
        if (user == null) {
            userRepository.save(new User(login, passwordEncoder.encode(password)));
            return null;
        } else {
            return "{\"error\": \"login " + login + " has already taken\"}";
        }

    }

    @RequestMapping(value = "user")
    public User user(ModelMap modelMap) {
        return (User) modelMap.get("user");
    }

    @RequestMapping(value = "history", method = RequestMethod.GET)
    public ResponseEntity getChecksHistory(@ModelAttribute("user") User user) {
        if (user == null){
            return ResponseEntity.badRequest().body("Ploho vse");
        }
        return ResponseEntity.ok().body(pointRepository.findAllByUser(user));
    }



    @RequestMapping(value = "check", method = RequestMethod.POST, consumes = {"application/json"})
    public ResponseEntity check(@RequestBody PointCheckRequest pointCheckRequest, BindingResult bindingResult,
                                @ModelAttribute("user") User user
    ) {
        pointValidator.validate(pointCheckRequest, bindingResult);
        if (bindingResult.hasErrors()) {
            return ResponseEntity.badRequest().body(bindingResult.getAllErrors());
        }
        Point point = checker.getResultPoint(pointCheckRequest);
        point.setUser(user);
        user.addPoint(point);
        pointRepository.save(point);
        userRepository.save(user);
        return ResponseEntity.ok(point);
    }
}
