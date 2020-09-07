'use strict';

alert("7.Используя вложенные циклы, сформируйте двумерный массив, содержащий таблицу умножения:");

let myArray = [],
    arrayMultiply = [];

for (let i = 0; i <= 10; i++){
    for(let j = 0; j <= 10; j++){
        arrayMultiply[j] = `${i} * ${j} = ${i * j}`;
    }
    myArray[i] = arrayMultiply.slice();
}

console.log(myArray);