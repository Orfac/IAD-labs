package com.orfac.lab.validator;

import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

public class PointCheckValidator implements Validator {
    @Override
    public boolean supports(Class<?> aClass) {
        return PointCheckValidator.class.isAssignableFrom(aClass);
    }

    @Override
    public void validate(Object o, Errors errors) {

    }
}
