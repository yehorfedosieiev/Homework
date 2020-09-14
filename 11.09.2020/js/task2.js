'use strict';

alert("2.Напишите функцию checkNumber, которая получает на вход как параметр массив любых значений и возвращает true, если все элементы - числа, и false - если в массиве хотя бы  одно не число. Для проверки массива используйте метод every или some");

let arrayData1 = [1, 2, '3', 'a'];
let arrayData2 = [1, 2, '3', '4'];

function checkNumber (data){
    return data.every(item => !isNaN(item));
}

console.log(checkNumber(arrayData1));

console.log(checkNumber(arrayData2));