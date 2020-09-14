'use strict';

alert("3.Напишите функцию, которая возвращает куб переданного числа, аналог Math.pow(x, 3)");

let cubePower = (number) => {
	let variable = number;
	for (let i = 0; i < 2; i++) {
		variable = variable * number;
	}
    return variable;
}

let num = +prompt("Введите число для возведения в куб", "5");
alert("используя цикл: " + cubePower(num));

let cubePowerRecursion = (number, power = 3) => {
    if (power <= 1) return number;
    else return number*cubePowerRecursion(number, --power);
}

num = +prompt("Введите число для возведения в куб", "5");
alert("через рекурсию: " + cubePowerRecursion(num));