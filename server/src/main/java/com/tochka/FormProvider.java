package com.tochka;

import com.tochka.elements.*;
import com.tochka.models.Method;
import org.springframework.stereotype.Repository;

import java.util.Arrays;

import static com.tochka.executors.FormMethods.*;
import static java.util.Collections.singletonList;

/**
 * Set of forms
 */
@Repository
public class FormProvider {

    public static final Method combine = Method.builder()
            .methodName(COMBINE.name())
            .methodDescription("Combine method")
            .inputs(singletonList(Input.builder().name("first_input").placeholder("First Input").build()))
            .menus(singletonList(Menu.builder()
                    .name("first_menu")
                    .description("First Menu")
                    .options(Arrays.asList(
                            Option.builder().description("First Value").value("first_value").build(),
                            Option.builder().description("Second Value").value("second_value").build(),
                            Option.builder().description("Third Value").value("third_value").build()))
                    .build()))
            .radios(singletonList(
                    Radio.builder()
                            .name("first_radio")
                            .description("First Radio")
                            .options(Arrays.asList(
                                    Option.builder()
                                            .value("first_radio_option")
                                            .description("First Radio Option").build(),
                                    Option.builder()
                                            .value("second_radio_option")
                                            .description("Second Radio Option").build()))
                            .build()))
            .executeBtn(Button.builder().label("Press me").build())
            .build();

    public static final Method defaultMethod = Method.builder()
            .methodName(DEFAULT.name())
            .methodDescription("Default method")
            .methodDescription("Most default form")
            .inputs(Arrays.asList(
                    Input.builder().placeholder("First Value").name("first_value").build(),
                    Input.builder().placeholder("Second Value").name("second_value").build(),
                    Input.builder().placeholder("Third Value").name("third_value").build()))
            .executeBtn(Button.builder().label("Default execute btn").build())
            .build();

    public static final Method menus = Method.builder()
            .methodName(MENUS.name())
            .methodDescription("Menus")
            .menus(Arrays.asList(
                    Menu.builder()
                            .name("first_menu")
                            .description("First Menu")
                            .options(Arrays.asList(
                                    Option.builder().value("Value 1").description("Value 1").build(),
                                    Option.builder().value("Value 2").description("Value 2").build(),
                                    Option.builder().value("Value 3").description("Value 3").build()))
                            .build(),
                    Menu.builder()
                            .name("second_menu")
                            .description("Second Menu")
                            .options(Arrays.asList(
                                    Option.builder().value("Value 1").description("Value 1").build(),
                                    Option.builder().value("Value 2").description("Value 2").build(),
                                    Option.builder().value("Value 3").description("Value 3").build()))
                            .build()))
            .executeBtn(Button.builder().label("Execute button").build())
            .build();
}
