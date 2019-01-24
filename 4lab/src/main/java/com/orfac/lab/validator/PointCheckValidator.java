package com.orfac.lab.validator;

import com.orfac.lab.request.PointCheckRequest;
import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

import java.util.Arrays;
import java.util.List;

@Component(value = "pointCheckValidator")
public class PointCheckValidator implements Validator {
    @Override
    public boolean supports(Class<?> aClass) {
        return PointCheckValidator.class.isAssignableFrom(aClass);
    }


    private List<Double> rAllowed = Arrays.asList(1d, 2d, 3d, 4d);

    @Override
    public void validate(Object obj, Errors errors) {
        PointCheckRequest pointCheckRequest = (PointCheckRequest) obj;
        if (!(pointCheckRequest.getX() >= -4 && pointCheckRequest.getX() <= 4)) {
            errors.rejectValue("x", "X should be from -4 to 4");
        }
        if (!(pointCheckRequest.getY() < 3 && pointCheckRequest.getY() > -3)) {
            errors.rejectValue("y", "Y не входит в рамки рассматриваемого диапазона");
        }

        if (rAllowed.stream().noneMatch((d -> (d.equals(pointCheckRequest.getR()))))) {
            StringBuilder rAllowedStringBuilder = new StringBuilder();
            rAllowed.iterator().forEachRemaining(d -> rAllowedStringBuilder.append(d.toString()).append(", "));
            errors.rejectValue("r", "Radius should belong to " + rAllowedStringBuilder.toString());
        }
    }
}
