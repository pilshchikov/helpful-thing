package com.tochka.executors;

import com.tochka.executors.methods.Combine;
import com.tochka.executors.methods.Default;
import com.tochka.executors.methods.Menus;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

/**
 * List of available forms
 */
@Getter
@RequiredArgsConstructor
public enum FormMethods {
    UNKNOWN(null),
    COMBINE(Combine.class),
    DEFAULT(Default.class),
    MENUS(Menus.class);

    private final Class clazz;
}
