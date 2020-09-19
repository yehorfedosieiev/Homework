'use strict';

// 7.	Создайте объект user с полем name. Создайте функцию format с параметрами start и end:

// function format(start, end) {
//     console.log(start + this.name + end);
// }

// Привяжите функцию format() к объекту user таким образом, чтобы ее вызов возвращал отформатированное имя пользователя

// userFormat('<<<', '>>>'); // <<<John>>>

// Реализуйте 2 версии текущего задания, используя:
// 1. Анонимную функцию;
// 2. Метод bind().

alert("7.Создайте объект user с полем name. Создайте функцию format с параметрами start и end. Привяжите функцию format() к объекту user таким образом, чтобы ее вызов возвращал отформатированное имя пользователя. Реализуйте 2 версии текущего задания, используя:\n1. Анонимную функцию;\n2. Метод bind().");

let user = {
    name: "Георгий"
};

function format(start, end) {
    console.log(start + this.name + end);
}

console.log("Метод bind()");
let bindFormat = format.bind(user);
bindFormat('<<<', '>>>');

console.log("Анонимная функция");
let userFormat = function (start, end){
    format.call(user, start, end);
};
userFormat('<<<', '>>>');