package com.tochka;

import com.tochka.models.FormBuilder;
import com.tochka.models.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;

@RestController
public class MainController {

    @Autowired
    private MethodExecutor executor;

    /**
     * @return список доступных методов с описанием интерфейсов взаимодействия
     */
    @CrossOrigin
    @ResponseBody
    @RequestMapping(method = RequestMethod.GET, value = "/methods")
    public FormBuilder methods() {

        return FormGenerator.getForm();
    }

    /**
     * Выполняем пришедший запрос и посылаем в ответ форму с результатами выполнения
     *
     * @param request параметры запроса
     * @return форма ответа
     */
    @CrossOrigin
    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/execute", produces = MediaType.APPLICATION_JSON_VALUE)
    public Response execute(@RequestBody HashMap<String, String> request) {

        return executor.execute(request);
    }
}
