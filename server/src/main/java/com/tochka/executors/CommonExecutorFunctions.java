package com.tochka.executors;

import lombok.val;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;

public class CommonExecutorFunctions {

    /**
     * Получаем енам по значению стинги
     *
     * @param enumClass набор енамов из которых выбираем
     * @param value     стринговое значение по которому ищем
     * @return найденный енам
     */
    protected <T extends Enum> T getEnumByValue(T[] enumClass, String value) {
        return Arrays.stream(enumClass).filter(item -> item.name().equals(value)).findFirst().get();
    }

    /**
     * Ответ от с вложенными мапами объектов преобразуем в лист стрингов
     *
     * @param map ответ
     * @return результат
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
