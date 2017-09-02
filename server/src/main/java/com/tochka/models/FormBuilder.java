package com.tochka.models;

import java.util.List;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.Accessors;

@Accessors(fluent = true)
@Getter
@Setter
@Builder
public class FormBuilder {

    public List<Method> methods;
}
