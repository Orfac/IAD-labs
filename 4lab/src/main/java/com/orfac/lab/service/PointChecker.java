package com.orfac.lab.service;

import com.orfac.lab.model.Point;
import com.orfac.lab.request.PointCheckRequest;
import org.springframework.stereotype.Component;

@Component(value = "PointChecker")
public class PointChecker {
    public Point getResultPoint(PointCheckRequest pointCheckRequest) {
        double x = pointCheckRequest.getX();
        double y = pointCheckRequest.getY();
        double r = pointCheckRequest.getR();

        Point resultPoint = new Point();
        resultPoint.setX(x);
        resultPoint.setY(y);
        resultPoint.setR(r);

        if (x >= 0 && y >=0){
            resultPoint.setResult(x<=r && y<=r);
        } else if (x <=0 && y <= 0){
            resultPoint.setResult(y >= (-1)*x - r / 2);
        } else if (x >=0 && y <=0){
            resultPoint.setResult(x*x + y*y <= r*r);
        } else {
            resultPoint.setResult(false);
        }

        return resultPoint;
    }
}
