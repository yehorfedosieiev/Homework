'use strict';

alert("4.Создайте массив со значениями: ‘AngularJS’, ‘jQuery’\na.	Добавьте в начало массива значение ‘Backbone.js’\nb.	Добавьте в конец массива значения ‘ReactJS’ и ‘Vue.js’\nc.	Добавьте в массив значение ‘CommonJS’ вторым элементом\nd.	Найдите и удалите из массива значение ‘jQuery’, выведите его в alert со словами “Это здесь лишнее”");

let myArray = ["AngularJS", "jQuery"];

myArray.unshift("Backbone.js");
myArray.push("React.Js");
myArray[myArray.length] = "Vue.js";
myArray.splice(1,0,"CommonJS");
let answer = confirm(`Позиция jQuery порядковый номер, которой = ${myArray.indexOf("jQuery") + 1} лишняя?`);
(answer === false) ? alert("Удобный инструмент не может быть лишним") : myArray.splice(myArray.indexOf("jQuery"), 1);