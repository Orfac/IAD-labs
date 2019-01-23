package com.orfac.lab.repository;

import com.orfac.lab.model.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Integer> {
    User findByLogin(String login);
}
