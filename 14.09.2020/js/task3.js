'use strict';

alert("3.Создайте функцию hello(), которая выводит приветствие пользователю. Создайте два объекта, содержащие поля firstname, lastname. Используя метод call и функцию hello() приветствуйте каждого из пользователей персонально.");

let user1 = {
	firstName: "Владлен",
	lastName: "Логинов"
};

let user2 = {
	firstName: "Хразален",
	lastName: "Сапрыгин"
};

function hello(){
	alert(`Hello ${this.firstName} ${this.lastName}`);
}

hello.call(user1);
hello.call(user2);