'use strict';

// Добавьте в прототип конструктора Array метод, позволяющий поменять элементы массива местами по индексам. Метод изменяет исходный массив

// var data = ['a', 'c', 'b'];
// data = data.swap(1, 2);
// console.log(data); // ['a', 'b', 'c]


alert("Добавьте в прототип конструктора Array метод, позволяющий поменять элементы массива местами по индексам. Метод изменяет исходный массив");

Array.prototype.swap = function (pos1, pos2){
    let num1 = this[pos1];
    this[pos1] = this[pos2];
    this[pos2] = num1;
    return this;
};


var data = ['a', 'c', 'b'];
console.log(data);
data = data.swap(1, 2);
console.log(data); // ['a', 'b', 'c]