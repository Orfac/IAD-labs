package com.orfac.lab.validator;

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


    private List<Double> rAllowed = Arrays.asList(1d, 2d, 3d, 4d, 5d);

    @Override
    public void validate(Object o, Errors errors) {

    }
}
