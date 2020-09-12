'use strict';

alert("7.Не используя методы массива, напишите функцию аналог метода массива push. Функция добавляет в конец переданного в параметре массив произвольное количество элементов.");

let myArray = [],
    arrayWithElementAtEnd = [];
let number = +prompt("Какое количество элементов необходимо в изначальном массиве?","10"),
    numberAdd = +prompt("Какое количество элементов необходимо в изначальном массиве?","5");

for(let i = 0; i < number; i++){
    myArray[i] = Math.random().toFixed(3)*1000;
}

function addElementToEnd(array, numberAdd){
    if (array === undefined) return false;
    let newArray = array;
    for(let i = 0; i < numberAdd; i++){
        newArray[newArray.length] = Math.random().toFixed(3)*1000;;
    }
    return newArray;
}

console.log ("Изначальный массив");
console.log(myArray);
console.log(`Добавление ${numberAdd} элементов в конец массива`);
arrayWithElementAtEnd = addElementToEnd(myArray, numberAdd);
console.log(arrayWithElementAtEnd);