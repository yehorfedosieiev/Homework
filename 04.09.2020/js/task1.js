'use strict';

alert("1.Создайте смешанный массив, например [1, 2, 3, ‘a’, ‘b’, ‘c’, ‘4’, ‘5’, ‘6’]. Посчитайте сумму всех его чисел, включая строковые. Выведите сумму в alert.");

let myArray = [];
let sum = 0;
let answer = confirm("Давайте сформируем массив");



if (answer === false) alert("Очень жаль, а могли посчитать и повеселиться");
else{
    alert("Всегда можно остановиться, нажав Cancel");
    while(true){
        let str = prompt(`Введите ${myArray.length+1} элемент массива`,"");
        if (str === null) break;
        else{
            myArray[myArray.length] = str;
        }
    }
    for (let i = 0; i < myArray.length; i++){
        if (!isNaN(myArray[i])) sum = sum + +myArray[i];
    }
}

alert("Сумма все чисел, включая строковые = " + sum);