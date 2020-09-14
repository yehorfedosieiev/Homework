'use strict';

alert("5.Придумайте алгоритм расчета суммы всех фактических параметров функции с использованием только рекурсии:");

function sum (first, ...myArray) {
	return (myArray.length === 1) ? (first + myArray[0]) : (first + sum(...myArray) );
}

// let sum = function (...args) {
//     if (args.length == 0) {
//         return 0
//     } else {
//         return args.pop() + sum(...args);
//     }
// }

let overallSum = sum(1, 2, 3, 4, 5);

console.log(overallSum);