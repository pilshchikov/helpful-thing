package com.tochka.models;

import java.util.List;

import com.tochka.elements.Button;
import com.tochka.elements.Input;
import com.tochka.elements.Menu;
import com.tochka.elements.Radio;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.Accessors;

@Accessors(fluent = true)
@Getter
@Setter
@Builder
public class Method {

    public String methodName;
    public String methodDescription;
    public List<Input> inputs;
    public List<Radio> radios;
    public List<Menu> menus;
    public Button executeBtn;
}
