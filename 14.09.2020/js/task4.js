'use strict';

// Создайте объект array с методом инициализации начального значения массива, c методами 
// добавления, удаления последнего элемента массива и методом возврата текущего состояния массива. 
// Используйте концепцию chaining для создания цепочки вызовов.
// array
// .setValue([1])
// .push(2)
// .push(3)
// .push(3)
// .pop();

// var currentValue = array.getValue();
// console.log(currentValue); // [1, 2, 3]

alert("4.Создайте объект array с методом инициализации начального значения массива, c методами добавления, удаления последнего элемента массива и методом возврата текущего состояния массива. Используйте концепцию chaining для создания цепочки вызовов.");

let array = {
    setValue(val){
        this.value = val;
        return this;
    },
    push(val){
        this.value[this.value.length] = val;
        return this;
    },
    pop(){
        this.value.length = this.value.length - 1;
        return this;
    },
    getValue(){
        return this.value;
    }
};

array.setValue([1]).push(2).push(3).push(3).pop();
var currentValue = array.getValue();
console.log(currentValue);