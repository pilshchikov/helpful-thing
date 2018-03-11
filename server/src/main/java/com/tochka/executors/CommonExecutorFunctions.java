package com.tochka.executors;

import lombok.val;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;

public class CommonExecutorFunctions {

    /**
     * Get enum by value
     *
     * @param enumClass enum class
     * @param value     item name
     * @return found enum
     */
    protected <T extends Enum> T getEnumByValue(T[] enumClass, String value) {
        return Arrays.stream(enumClass).filter(item -> item.name().equals(value)).findFirst().get();
    }

    /**
     * Map to list
     *
     * @param map map to convert
     * @return List<Object>
     */
    protected List<String> pretty(HashMap<String, Object> map) {

        List<String> resultList = new ArrayList<>();
        for (val item : map.entrySet()) {
            if (item.getValue() instanceof HashMap)
                resultList.addAll(pretty((HashMap<String, Object>) item.getValue()));
            else if (item.getValue() instanceof String)
                resultList.add(item.getKey() + " : " + item.getValue());
            else if (item.getValue() instanceof Object[])
                resultList.add(item.getKey() + " : " + (((Object[]) item.getValue()).length > 0
                        ? ((Object[]) item.getValue())[0] : "null"));
            else
                resultList.add(item.getKey() + " : " + item.getValue().toString());
        }
        return resultList;
    }
}
