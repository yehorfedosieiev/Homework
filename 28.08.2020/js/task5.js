'use strict';

alert("Напишите бесконечный цикл, который прерывается при помощи команды break, когда Math.random() > 0.99. Выведите в окно alert случайное число, прервавшее цикл, и количество итераций цикла.");

let count = 0;
let helpNumber;

while (true){
    if ((helpNumber = Math.random()) < 0.99) count++;
    else break;
}

alert(`Число ${helpNumber} > 0.99, чтобы выйти из цикла понадобилось ${count} итераций`);