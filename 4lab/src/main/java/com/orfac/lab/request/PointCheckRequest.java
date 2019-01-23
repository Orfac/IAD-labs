package com.orfac.lab.request;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;

public class PointCheckRequest {
    @JsonDeserialize(converter = DoubleConverter.class)
    private double x;
    @JsonDeserialize(converter = DoubleConverter.class)
    private double y;
    @JsonDeserialize(converter = DoubleConverter.class)
    private double r;

    public PointCheckRequest(){

    }

    public double getX() {
        return x;
    }

    public void setX(double x) {
        this.x = x;
    }

    public double getY() {
        return y;
    }

    public void setY(double y) {
        this.y = y;
    }

    public double getR() {
        return r;
    }

    public void setR(double r) {
        this.r = r;
    }
}
