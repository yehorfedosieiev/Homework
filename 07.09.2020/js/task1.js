'use strict';

alert("1.Создайте функцию p и a, которые будут служить короткими именами для prompt и alert соответственно, то есть запрашивать окно с полем ввода и выводить любое пользовательское сообщение в стандартном модальном окне. Напишите функцию d, которая будет служить коротким именем для debugger, то есть запускать процесс отладки. Используя эти псевдонимы получите значение из prompt и отобразите в alert. А процесс работы скрипта проконтролируйте с помощью функции, которая служит для дебага.");

function p(message, defaultValue){
    message = message || "Введите текст";
    defaultValue = defaultValue || "пример";
    return prompt(message, defaultValue);
}

function a(message){
    message = message || "the Aha-moment!!!";
    alert(message);
}

function myDebugger (){
    debugger;
};

myDebugger();

p();

a();