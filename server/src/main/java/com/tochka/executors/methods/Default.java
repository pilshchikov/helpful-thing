package com.tochka.executors.methods;

import com.tochka.executors.CommonExecutorFunctions;
import com.tochka.executors.Executor;
import com.tochka.models.Response;

import java.util.Arrays;
import java.util.HashMap;

import static java.util.Collections.singletonList;

public class Default extends CommonExecutorFunctions implements Executor {

    @Override
    public Response execute(HashMap<String, String> param) {

        String firstInput = param.get("first_value");
        String secondInput = param.get("second_value");
        String thirdInput = param.get("third_value");

        try {

            // your business logic here

            if (thirdInput.length() == 0) throw new Error("Third input should be filled");
            return Response.builder()
                    .response("All is good")
                    .request("There is no request")
                    .responseFields(Arrays.asList(
                            "First value: " + firstInput,
                            "Second value: " + secondInput,
                            "Third value: " + thirdInput))
                    .build();
        } catch (Throwable e) {
            return Response.builder()
                    .request(String.format("Inputs %s %s %s", firstInput, secondInput, thirdInput ))
                    .response(e.getMessage())
                    .responseFields(singletonList("Статус: что-то пошло не так"))
                    .build();
        }
    }
}
