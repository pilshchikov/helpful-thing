package com.tochka.executors.methods;

import com.tochka.executors.Executor;
import com.tochka.models.Response;

import java.util.Arrays;
import java.util.HashMap;

import static java.util.Collections.singletonList;

public class Menus implements Executor {
    @Override
    public Response execute(HashMap<String, String> param) {

        String firstMenuValue = param.get("first_menu");
        String secondMenuValue = param.get("second_menu");

        try {
            // your business logic here

            if (firstMenuValue.length() == 0) throw new Error("First menu should be selected");
            return Response.builder()
                    .response("All is good")
                    .request("There is no request")
                    .responseFields(Arrays.asList(
                            "First menu value: " + firstMenuValue,
                            "Second menu value: " + secondMenuValue))
                    .build();
        } catch (Throwable e) {
            return Response.builder()
                    .request(String.format("Inputs %s %s", firstMenuValue, secondMenuValue ))
                    .response(e.getMessage())
                    .responseFields(singletonList("Статус: что-то пошло не так"))
                    .build();
        }
    }
}
