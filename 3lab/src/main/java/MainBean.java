import model.Point;

import java.io.Serializable;


public class MainBean implements Serializable {


    private Boolean[] xValues;
    private String yValue;
    private Point point;

    public MainBean(){
        point = null;
        xValues = new Boolean[6];
        for (int i = 0; i < 6; i++) {
            xValues[i] = Boolean.FALSE;
        }
        yValue = "1,52";
    }

    public double getConvertedXValue(int number){
        double startXValue = -2;
        double coeffXValue = 0.5;
        return startXValue + coeffXValue *number;
    }

    public String getYValue() {
        return yValue;
    }

    public void setYValue(String value){
        this.yValue = value;
    }

    public Boolean getX(int index) {
        return xValues[index];
    }

    public void updateX(Boolean[] xValues){
        int a = 0;
        int b = 0;
    }

    public Boolean[] getxValues() {
        return xValues;
    }

    public void setxValues(Boolean[] xValues) {
        this.xValues = xValues;
    }


    public void AddNewPoint() {
       int a;
       int b;
       a = 0;
    }
}