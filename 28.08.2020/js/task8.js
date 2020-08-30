'use strict';

alert("С помощью цикла for с пустым телом сформируйте строку, представляющую из себя ряд Фибоначчи: 0 1 1 2 3 5 8 13...");

let predel = +prompt('Введите количество чисел ряда Фибоначчи', '');
let str='';

for(let current = 1, previous = 0, i = 0; i <= predel; i++, str = str + previous + " ", current = current + previous, previous = current - previous){
}

alert(str);