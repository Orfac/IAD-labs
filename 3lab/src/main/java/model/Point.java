package model;

public class Point {
    public double x;
    public double y;
    public int r;
    public boolean isMatched;

    public Point(double x, double y, int r){
        this.x = x;
        this.y = y;
        this.r = r;
    }

    public String getCheckStatus(){
        return isMatched ? "Yes" : "No";
    }
}