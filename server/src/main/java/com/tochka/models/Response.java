package com.tochka.models;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.Accessors;

import java.util.HashMap;
import java.util.List;

@Accessors(fluent = true)
@Getter
@Setter
@Builder
public class Response {

    public String request;
    public String response;
    public List<String> responseFields;
    public HashMap<String, String> data;
}
