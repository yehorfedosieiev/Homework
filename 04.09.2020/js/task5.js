'use strict';

alert("5.Создайте строку с текстом ‘Как Однажды Жак Звонарь Сломал Городской Фонарь’. Разбейте ее на массив слов, и переставьте слова в правильном порядке с помощью любых методов массива (indexOf, splice ...). Затем объедините элементы массива в строку и выведите в alert исходный и итоговый варианты.");

let str = "Как Однажды Жак Звонарь Сломал Городской Фонарь";

let [...arrayStr] = str.split(" ");
let clone = arrayStr.slice();
let number = clone.indexOf("Городской");
let word = [];
clone.splice(number - 1, 0, word[0] = clone.splice(number,1));

alert ("Изначальная фраза: " + arrayStr.join(" ") + "\n" + "Конечная фраза: " + clone.join(" "));