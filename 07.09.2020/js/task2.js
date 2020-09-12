'use strict';

alert("2.Используя стрелочный синтаксис ES6, напишите функцию max (аналог Math.max), которая сравнивает два числа и возвращает большее");

let myMax = (x, y) =>{
    if (x > y) return x;
    else return y;
}

let str = prompt("Введите два числа через пробел, например: 7 5", "");
let myArray = [];
[...myArray] = str.split(" ");

alert(myMax(myArray[0], myArray[1]));