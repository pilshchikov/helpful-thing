package com.tochka.executors;

import java.util.HashMap;

import com.tochka.models.Response;

public interface Executor {

    Response execute(HashMap<String, String> param);
}
