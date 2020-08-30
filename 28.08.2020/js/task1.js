'use strict';

alert("Сформируйте строку в виде треугольника-елочки:");

let height = +prompt('Введите высоту елки', '');
let str = "";

for (let i = 0; i < height; i++){
    for(let j = 1; j <=(2*height - 1); j++){
        if (j >= (height-i) && j <= (height+i)) str = str + "*";
        else str = str + "-";
    }
    str = str + '\n';
}

alert (str);