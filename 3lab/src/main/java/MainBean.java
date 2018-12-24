import com.sun.org.apache.xpath.internal.operations.Bool;
import model.AreaChecker;
import model.Point;

import javax.faces.component.html.HtmlSelectBooleanCheckbox;
import javax.faces.event.ValueChangeEvent;
import java.io.Serializable;
import java.util.ArrayList;


public class MainBean implements Serializable {

    private Boolean[] xValues;
    private double Y;
    private int R;
    private ArrayList<Point> points;

    private AreaChecker checker;

    public MainBean() {
        xValues = new Boolean[6];
        for (int i = 0; i < 6; i++) {
            xValues[i] = Boolean.FALSE;
        }
        xValues[0] = true;
        R = 1;
        checker = new AreaChecker();
        points = new ArrayList<Point>();
    }

    public double getConvertedXValue(int number) {
        double startXValue = -2;
        double coeffXValue = 0.5;
        return startXValue + coeffXValue * number;
    }

    private double getX() {
        int index = 0;
        for (int i = 0; i < xValues.length; i++) {
            if (xValues[i]){
                index = i;
                break;
            }
        }
        return getConvertedXValue(index);
    }

    public double getY() {
        return Y;
    }

    public void setY(double value) {
        this.Y = value;
    }

    public void updateX(ValueChangeEvent e) {
        HtmlSelectBooleanCheckbox box = (HtmlSelectBooleanCheckbox) e.getSource();
        int index = Integer.parseInt(String.valueOf(box.getClientId().getBytes()[16])) - 48;
        xValues[index] = !xValues[index];
    }

    public Boolean[] getxValues() {
        return xValues;
    }

    public void setxValues(Boolean[] xValues) {
        this.xValues = xValues;
    }

    public void setR(int R) {
        this.R = R;
    }

    public void AddNewPoint() {
        Point point = new Point(this.getX(), Y,R);
        checker.Check(point);
        points.add(point);
    }


    public ArrayList<Point> getPoints() {
        return points;
    }

    public void setPoints(ArrayList<Point> points) {
        this.points = points;
    }
}