'use strict';

alert("9.Напишите функцию ask с тремя параметрами: question, defaultValue, callback. Функция ask запрашивает с помощью prompt вопрос question, ответ по умолчанию - defaultValue. Что делать с полученным значением - определяет callback");

function ask(question, defaultValue, callback){
    let value = prompt(question, defaultValue);
    // value = value || defaultValue;
    callback (value);
}

ask ("How old are you", "34", alert);