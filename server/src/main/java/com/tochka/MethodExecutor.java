package com.tochka;

import com.tochka.executors.Executor;
import com.tochka.executors.FormMethods;
import com.tochka.models.Response;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.HashMap;

@Service
public class MethodExecutor {

    /**
     * Forward request to specific form module
     *
     * @param params request params
     * @return request
     */
    public <T extends Executor> Response execute(HashMap<String, String> params) {

        try {
            return ((T) Arrays.stream(FormMethods.values())
                    .filter(method -> params.get("methodName").equals(method.name()))
                    .findFirst()
                    .orElse(FormMethods.UNKNOWN).getClazz().newInstance()).execute(params);
        } catch (InstantiationException | IllegalAccessException e) {
            e.printStackTrace();
            return Response.builder().response("Что-то пошло не так").build();
        }

    }
}
