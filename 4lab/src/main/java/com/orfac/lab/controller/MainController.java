package com.orfac.lab.controller;

import com.orfac.lab.model.Point;
import com.orfac.lab.model.User;
import com.orfac.lab.repository.PointRepository;
import com.orfac.lab.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.ui.ModelMap;
import org.springframework.validation.BindingResult;
import org.springframework.validation.Validator;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.List;

@CrossOrigin(origins = {"https://se.ifmo.ru", "http://localhost"}, maxAge = 3600)
@RestController(value = "/api")
@RequestMapping("/api")
public class MainController {

    @Autowired
    private AbstractAreaCheckCalculator areaCheckCalculator;

    @Autowired
    private Validator areaCheckRequestValidator;

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
            return userRepository.findByName(((UserPrincipalImpl) o).getUsername());
        } else {
            return null;
        }
    }

    @RequestMapping(value = "register", method = RequestMethod.POST)
    public String register(@RequestParam String username, @RequestParam String password) {
        User user = userRepository.findByName(username);
        if (password == null || password.trim().isEmpty()) {
            return "{\"error\": \"пароль не может быть пустой строкой\"}";
        }
        if (user == null) {
            userRepository.save(new User(username, passwordEncoder.encode(password)));
            return null;
        } else {
            return "{\"error\": \"имя " + username + " уже зарегистрировано\"}";
        }

    }

    @RequestMapping(value = "user")
    public User user(ModelMap modelMap) {
        return (User) modelMap.get("user");
    }

    @RequestMapping(value = "history", method = RequestMethod.GET)
    public List<Point> getChecksHistory(ModelMap modelMap) {
        return pointRepository.findFirst50ByUserOrderByIdDesc(((User) modelMap.get("user")));
    }


    @RequestMapping(value = "check", method = RequestMethod.POST, consumes = {"application/json"})
    public ResponseEntity check(@RequestBody AreaCheckRequest areaCheckRequest, BindingResult bindingResult,
                                @ModelAttribute("user") User user
    ) {
        areaCheckRequestValidator.validate(areaCheckRequest, bindingResult);
        if (bindingResult.hasErrors()) {
            return ResponseEntity.badRequest().body(bindingResult.getAllErrors());
        }
        Point point = areaCheckCalculator.getResult(areaCheckRequest);
        point.setUser(user);
        user.addCheckResult(point);
        userRepository.save(user);
        return ResponseEntity.ok(point);
    }
}
