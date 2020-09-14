'use strict';

alert("1.Напишите функцию, которая в строке, состоящей из чисел, разделенных пробелом, находит максимальное и минимальное и возвращает их ");

let str = prompt("Введите строку из чисел, разделенных пробелами", "4 5 29 54 4 0 -214 542 -64 1 -3 6 -6");

function myMinAndMax(str){
    let [...arrayNumber] = str.split(" ");
    
    for(let i = 0; i < arrayNumber.length; i++){
        arrayNumber[i] = +arrayNumber[i];
    }
    
    let min = arrayNumber[0], max = arrayNumber[0];
    
    for(let i = 1; i < arrayNumber.length; i++){
        if (arrayNumber[i] < min) min = arrayNumber[i];
        if (arrayNumber[i] > max) max = arrayNumber[i];
    }
    
    return "Min = " + min + "; " + "Max = " + max;
}

alert(myMinAndMax(str));