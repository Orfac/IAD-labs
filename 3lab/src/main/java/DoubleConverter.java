import javax.faces.application.FacesMessage;
import javax.faces.component.UIComponent;
import javax.faces.context.FacesContext;
import javax.faces.convert.Converter;
import javax.faces.convert.ConverterException;

public class DoubleConverter implements Converter {
    public Object getAsObject(FacesContext facesContext, UIComponent uiComponent, String stringValue) {
        if (stringValue.length() > 7) {
            FacesMessage msg = new FacesMessage("Error converting double", "Invalid length, input must be less then 7 symbols");
            msg.setSeverity(FacesMessage.SEVERITY_ERROR);
            throw new ConverterException(msg);
        }

        if (stringValue.contains(",")) {
            FacesMessage msg = new FacesMessage("Error converting double", "Invalid symbol, use dot instead of comma");
            msg.setSeverity(FacesMessage.SEVERITY_ERROR);
            throw new ConverterException(msg);
        }

        double doubleValue;
        try {
            doubleValue = Double.parseDouble(stringValue);
        }
        catch (NumberFormatException e) {
            FacesMessage msg = new FacesMessage("Error converting double", "Invalid value, input must be double value");
            msg.setSeverity(FacesMessage.SEVERITY_ERROR);
            throw new ConverterException(msg);
        }
        return doubleValue;
    }

    public String getAsString(FacesContext facesContext, UIComponent uiComponent, Object value) {
        return value.toString();
    }
}