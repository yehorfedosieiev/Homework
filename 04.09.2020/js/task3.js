'use strict';

alert("3.Создайте массив из минимум 100 случайных целых чисел. Переберите массив и сгенерируйте на его основе новый, который содержит только уникальные (неповторяющиеся) значения исходного массива. Решите, используя только цикл for.");

let myArray = [],
    clone = [],
    uniqueArray = [];
let arrayLength,
    currentNumber;

arrayLength = +prompt("Введите кол-во элементов в массиве >=100","");

if (arrayLength === null || arrayLength < 100) alert("Ну нет, так нет");
else{
    for(let i = 0; i < arrayLength; i++){
        myArray.push(Math.random().toFixed(3)*1000);
    }
}

clone = myArray.slice(0);

while(clone.length){
    let numberCount = 0;
    currentNumber = clone.shift();
    
    for(let i = 0; i < clone.length; i++){
        if (currentNumber === clone[i]) numberCount++;
    }
    if (numberCount === 0) uniqueArray[uniqueArray.length] = currentNumber;
}

console.log("Изначальный массив");
console.log(myArray);
console.log("Неповторяющиеся числа");
console.log(uniqueArray);