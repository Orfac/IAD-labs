import model.Point;

import java.io.Serializable;

public class PointBean implements Serializable {

    private boolean[] xValues;

    private String yValue;
    private Point point;

    public PointBean(){
        point = null;
        xValues = new boolean[6];
        xValues[0] = true;
    }



    public boolean getXValue(int index){
        if (index < xValues.length && index > -1){
            return xValues[index];
        }
        return false;
    }

    public double getConvertedXValue(){
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

    public void update(int num){

    }


    public boolean[] getXValues() {
        return xValues;
    }
}