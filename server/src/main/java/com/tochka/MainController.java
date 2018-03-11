package com.tochka;

import com.tochka.models.FormBuilder;
import com.tochka.models.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;

@RestController
public class MainController {

    @Autowired
    private MethodExecutor executor;

    /**
     * @return forms content list
     */
    @CrossOrigin
    @ResponseBody
    @RequestMapping(method = RequestMethod.GET, value = "/methods")
    public FormBuilder methods() {

        return FormGenerator.getForm();
    }

    /**
     * Execute method
     *
     * @param request params
     * @return response
     */
    @CrossOrigin
    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/execute", produces = MediaType.APPLICATION_JSON_VALUE)
    public Response execute(@RequestBody HashMap<String, String> request) {

        return executor.execute(request);
    }
}
