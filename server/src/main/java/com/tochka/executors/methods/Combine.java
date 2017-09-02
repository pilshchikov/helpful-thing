package com.tochka.executors.methods;

import com.tochka.executors.CommonExecutorFunctions;
import com.tochka.executors.Executor;
import com.tochka.models.Response;

import java.util.Arrays;
import java.util.HashMap;

import static java.util.Collections.*;

/**
 * Меняем пароль у юзера
 */
public class Combine extends CommonExecutorFunctions implements Executor {

    @Override
    public Response execute(HashMap<String, String> param) {

        String inputValue = param.get("first_input");
        String menuValue = param.get("first_menu");
        String radioValue = param.get("first_radio");
        String combinedRequest = "Request: " + inputValue + " " + menuValue + " " + radioValue;

        try {
            // your business logic here

            if (radioValue.length() == 0) throw new Error("Radio must be selected");
            return Response.builder()
                    .response("All is good")
                    .request(combinedRequest)
                    .responseFields(Arrays.asList(
                            "Input value: " + inputValue,
                            "Menu value: " + menuValue,
                            "Radio value: " + radioValue))
                    .build();
        } catch (Throwable e) {
            return Response.builder()
                    .request(combinedRequest)
                    .response(e.getMessage())
                    .responseFields(singletonList("Статус: что-то пошло не так"))
                    .build();
        }
    }
}
