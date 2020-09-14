'use strict';

alert("4.Напишите функцию extraCube, которая принимает в качестве параметра или число, или массив числовых значений и возвращает либо куб числа, либо массив кубов, в зависимости от типа входящего параметра (typeof). Для расчета куба числа вместо встроенного метода Math.pow используйте собственную функцию.");

let data1 = 5;
let data2 = [1,2,3,4,5];

let cubePowerRecursion = (number, power = 3) => {
    if (power <= 1) return number;
    else return number*cubePowerRecursion(number, --power);
}

function extraCube(data){
    if (typeof(data) === "number") return cubePowerRecursion(data);
    if (typeof(data) === "object") return data.map(item => cubePowerRecursion(item));
}

// console.log(extraCube(data1));

let result = extraCube(data2);
console.log(result);