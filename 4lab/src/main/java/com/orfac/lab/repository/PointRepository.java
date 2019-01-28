package com.orfac.lab.repository;

import com.orfac.lab.model.Point;
import com.orfac.lab.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface PointRepository extends CrudRepository<Point, Integer> {

    List<Point> findAllByUser(User user);
}
