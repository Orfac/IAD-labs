package model;

public class Point {
    public double x;
    public double y;
    public double r;

    public boolean isMatched;

    public Point(double x, double y, int r) {
        this.x = x;
        this.y = y;
        this.r = r;
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

    public boolean getIsMatched() {
        return isMatched;
    }

    public void setIsMatched(boolean isMatched) {
        this.isMatched = isMatched;
    }
}