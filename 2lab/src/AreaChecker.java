class AreaChecker {
    Boolean Check(double x, double y, double r) {

        // Checking square
        boolean firstAreaCheck = x <= 0 && y >= 0 && y <= r && x <= r;
        // Checking triangle
        boolean secondAreaCheck = x <= 0 && y <= 0 && 2 * x - r <= y;
        // Checking circle
        boolean thirdAreaCheck = x >= 0 && y <= 0 && x * x + y * y <= r * r;
        return firstAreaCheck || secondAreaCheck || thirdAreaCheck;
    }
}
