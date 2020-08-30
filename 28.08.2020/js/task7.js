'use strict';

alert("Используя вложенные циклы, сформируйте строку чередованием символов . и # таким образом, чтобы получилась шахматный узор. Для перевода строки используйте символ \n. Код должен поддерживать легкое изменение размеров доски.");

let numberRow = +prompt('Какой кол-во строк', '');
let numberColumn = +prompt('Какой кол-во колонок', '');
let rezult = "";

for (let i = 0; i < numberRow; i++){
    for (let j = 0; j < numberColumn; j++){
        if (i%2 === 0){
            if (j%2 === 0) rezult = rezult + ".";
            else rezult = rezult + "#";
        } else{
            if (j%2 === 0) rezult = rezult + "#";
            else rezult = rezult + ".";
        }
    }
    rezult = rezult + "\n";
}

alert(rezult);