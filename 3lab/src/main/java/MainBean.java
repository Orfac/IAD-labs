import model.Point;

import java.io.Serializable;


public class MainBean implements Serializable {


    public static boolean[] xValues;

    private String yValue;
    private Point point;

    public MainBean(){
        point = null;
        xValues = new boolean[6];
        xValues[0] = true;
        yValue = "1,52";
    }



    public boolean getXValue(int index){
        if (index < xValues.length && index > -1){
            return xValues[index];
        }
        return false;
    }

    public double convertValue(){
        int selectedNumber = -1;
        for (int i = 0; i < xValues.length; i++) {
            if (xValues[i]){
                selectedNumber = i;
                break;
            }
        }

        double startXValue = -2;
        double coeffXValue = 0.5;
        return startXValue + coeffXValue *selectedNumber;
    }

    public double getConvertedXValue(int number){
        double startXValue = -2;
        double coeffXValue = 0.5;
        return startXValue + coeffXValue *number;
    }

    public void update(int num){
        xValues[num] = !xValues[num];
    }

    public String getYValue() {
        return yValue;
    }
}