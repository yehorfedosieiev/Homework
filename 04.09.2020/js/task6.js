'use strict';

alert("6.Создайте пустой массив. В цикле до n на каждой итерации запускайте prompt для ввода любых символов, полученное значение добавляйте в конец созданного массива. После выхода из цикла посчитайте сумму всех чисел массива и выведите в alert полученный результат.");

let myArray = [];
let number = 0;

number = +prompt("Введите желаемое количество элементов массива N","");

let i = 0;

while(i < number){
    let answer = prompt(`Введите ${i+1} элемент массива`, "");
    if (answer === null) break;
    else myArray.push(answer);
    i++;
}

let sum = 0;

for(let i = 0; i < number; i++){
    if (!isNaN(myArray[i])) sum = sum + +myArray[i];
}

alert("Сумма всех чисел в массиве = " + sum);