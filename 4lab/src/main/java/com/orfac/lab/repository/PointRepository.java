package com.orfac.lab.repository;

import com.orfac.lab.model.Point;
import org.springframework.data.repository.CrudRepository;

public interface PointRepository extends CrudRepository<Point, Integer> {
}
