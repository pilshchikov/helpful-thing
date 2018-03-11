package com.tochka;

import com.tochka.models.FormBuilder;

import java.util.Arrays;
import java.util.Collections;

import static com.tochka.FormProvider.*;

/**
 * Список форм с описанием интерфейсов взаимодействия для клиента
 */
public class FormGenerator {

    private static FormBuilder formBuilder = null;

    private static FormGenerator run() {

        return new FormGenerator();
    }

    private static FormBuilder getFormBuilder() {

        if (formBuilder == null)
            formBuilder = FormGenerator.run().initElements();
        return formBuilder;
    }

    public static FormBuilder getForm() {

        return getFormBuilder();
    }

    /**
     * Setup available forms
     *
     * @return list of forms
     */
    private FormBuilder initElements() {

        switch (System.getProperty("form.version", "FULL")) {
            case "FULL":
                return FormBuilder.builder()
                        .methods(Arrays.asList(combine, defaultMethod, menus))
                        .build();
            case "CUTTED":
                return FormBuilder.builder()
                        .methods(Collections.singletonList(combine))
                        .build();
            default:
                return FormBuilder.builder().build();
        }
    }
}
