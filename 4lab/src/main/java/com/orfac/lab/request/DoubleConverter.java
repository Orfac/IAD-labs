package com.orfac.lab.request;

import com.fasterxml.jackson.databind.util.StdConverter;
import org.springframework.core.convert.ConversionFailedException;
import org.springframework.core.convert.TypeDescriptor;

public class DoubleConverter extends StdConverter<String, Double> {

    @Override
    public Double convert(String s) {
        int maxLength = 15;
        if (s.length() > maxLength){
            throw new ConversionFailedException(
                    TypeDescriptor.forObject(s),
                    TypeDescriptor.valueOf(Double.class),
                    s,
                    new Throwable("Length of double should be less then " + maxLength + "symbols ")
            );
        }

        double value;
        try {
            value = Double.parseDouble(s);
        } catch (NumberFormatException e){
            throw new ConversionFailedException(
                    TypeDescriptor.forObject(s),
                    TypeDescriptor.valueOf(Double.class),
                    s,
                    new Throwable("Is not a double.")
            );
        }

        return value;
    }
}
