import com.sun.org.apache.xpath.internal.operations.Bool;
import model.Point;

import javax.faces.component.html.HtmlSelectBooleanCheckbox;
import javax.faces.event.ValueChangeEvent;
import java.io.Serializable;


public class MainBean implements Serializable {

    private Boolean[] xValues;
    private double Y;
    private int R;

    public MainBean() {
        xValues = new Boolean[6];
        for (int i = 0; i < 6; i++) {
            xValues[i] = Boolean.FALSE;
        }
        xValues[0] = true;
        Y = 1.52;
    }

    public double getConvertedXValue(int number) {
        double startXValue = -2;
        double coeffXValue = 0.5;
        return startXValue + coeffXValue * number;
    }

    public double getY() {
        return Y;
    }

    public void setY(double value) {
        this.Y = value;
    }

    public Boolean getX(int index) {
        return xValues[index];
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

    public void AddNewPoint() {
        Point point = new Point(1, 2, 3);
        int a = 2;
    }

    public void setR(int R) {
        this.R = R;
    }
}