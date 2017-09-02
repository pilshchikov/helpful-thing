package com.tochka.elements;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.Accessors;

@Accessors(fluent = true)
@Getter
@Setter
@Builder
public class Input {

    public String name;
    public String placeholder;
    public Boolean mustBe;
}
