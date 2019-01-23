package com.orfac.lab.repository;

import com.orfac.lab.model.Point;
import com.orfac.lab.model.User;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface PointRepository extends CrudRepository<Point, Integer> {
    List<Point> findFirst50ByUserOrderByIdDesc(User user);
}
