'use strict';

alert("6.Не используя методы массива, напишите функцию аналог метода shift. Функция удаляет из переданного в параметре массива первый элемент и возвращает новый массив.");

let myArray = [],
    arrayWithoutFirstElement = [];
let number = +prompt("Какое количество элементов необходимо?","10");

for(let i = 0; i < number; i++){
    myArray[i] = Math.random().toFixed(3)*1000;
}

function deleteFirstElement(array){
    if (array === undefined) return false;
    let newArray = [];
    for(let i = 1; i < array.length; i++){
        newArray[i-1] = array[i];
    }
    return newArray;
}

console.log ("Изначальный массив");
console.log(myArray);
console.log("Удаление 1-ого элемента");
arrayWithoutFirstElement = deleteFirstElement(myArray);
console.log(arrayWithoutFirstElement);