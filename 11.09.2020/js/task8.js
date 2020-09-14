'use strict';

alert("8.Используя замыкания, создайте функцию createAdder(), которая принимает на вход любой примитивный параметр и возвращает функцию, которая добавляет к первому параметру второй.");

function createAdder (x){
    return function (y){
        return x+y
    }
}

let hello = createAdder('Hello, ');
alert( hello('John') );
alert( hello('Harry') ); 

let plus = createAdder(5);
alert( plus(1) );
alert( plus(5) ); 
