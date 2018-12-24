package model;

public class AreaChecker {
    public void Check(Point point) {
        double x = point.x;
        double y = point.y;
        double r = point.r;

        boolean isInCircle = x >= 0 && y >= 0
                && x * x + y * y < r * r;
        if (!isInCircle) {
            boolean isInRectangle = x <= 0 && y <= 0 &&
                    Math.abs(x) < r && Math.abs(y) < r / 2;
            if (!isInRectangle) {
                // check if is in triangle
                point.isMatched = x >= 0 && y <= 0 && y >= 2 * x - r;
            } else {
                point.isMatched = true;
            }
        } else {
            point.isMatched = true;
        }
    }
}
