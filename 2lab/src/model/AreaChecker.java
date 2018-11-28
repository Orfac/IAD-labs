package model;

public class AreaChecker {
    public void Check(Point p) {
        double x = p.x;
        double y = p.y;
        int r = p.R;

        p.isMatched = (y >= 0 && x <= 0 && Math.abs(x) < r && Math.abs(y) < r)
                || (y <= 0 && x <= 0 && y >= (((-1)* 2 * x) - r))
                || (y <= 0 && x >= 0 && x * x + y * y < r * r);

    }
}
