package com.tochka.elements;

import java.util.List;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.Accessors;

/**
 * @author Stepan Pilshchikov
 * @created 19.06.17
 */
@Accessors(fluent = true)
@Getter
@Setter
@Builder
public class Menu {

    public String name;
    public String description;
    public List<Option> options;
}
