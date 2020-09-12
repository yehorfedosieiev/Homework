'use strict';

alert("4.Напишите функцию, которая в переданной строке ищет самое длинное слово и возвращает его длину.");

function findLongestWordLength (str){
    let [...myWordArray] = str.split(" ");
    let ammount = myWordArray[0].length;
    for(let i = 1; i < myWordArray.length; i++){
        if (myWordArray[i].length > ammount) ammount = myWordArray[i].length;
    }
    return ammount;
}

let str = prompt("Введите фразу","");
alert("Самое длинное слово состоит из " + findLongestWordLength(str) + " букв");