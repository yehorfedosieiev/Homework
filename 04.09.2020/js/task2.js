'use strict';

alert("2.Сгенерируйте массив из N случайных чисел с двумя знаками после запятой. Затем переберите массив и распечатайте в консоли значения его элементов, возведенные в пятую степень. Для возведения в степень используйте вложенный цикл (не метод Math.pow(), не оператор **).");

let myArray = [];
let powerArray = [];
let arrayLength;

arrayLength = +prompt("Введите кол-во элементов в массиве","");

if (arrayLength === null) alert("Ну нет, так нет");
else{
    for(let i = 0; i < arrayLength; i++){
        myArray[i] = Math.random().toFixed(2)*100;
    }
}

for(let i = 0; i < arrayLength; i++){
    let powerFive = 1;
    for(let j = 1; j <= 5; j++){
        powerFive *=myArray[i];
    }
    powerArray.push(powerFive);
}

//только понять как работает splice
for(let i = 0, j = 0; i < arrayLength*2; i = i + 2, j++){
    myArray.splice(i+1,0,powerArray[j]);
    console.log("Число " + myArray[i] + " в 5 степени = " + myArray[i+1]);
}