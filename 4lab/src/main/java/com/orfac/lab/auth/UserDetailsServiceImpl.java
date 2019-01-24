package com.orfac.lab.auth;

import com.orfac.lab.model.User;
import com.orfac.lab.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {
    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String name) throws UsernameNotFoundException {
        User user = userRepository.findByLogin(name);
        if (user == null) {
            throw new UsernameNotFoundException(name);
        }
        return new UserPrincipalImpl(user.getLogin(), user.getPassword());
    }
}