'use strict';

alert("3.Используя синтаксис ES5, напишите функцию-аналог Math.min(). Функция принимает любое количество чисел и возвращает меньшее из них:");

function findMin (){
    let min = arguments[0];
	for (let i = 1; i < arguments.length; i++) {
		if (arguments[i] < min) min = arguments[i];
	}
    return min;
}

alert("минимальное значение = " + findMin(-1, 5, -8, 100, -5, 29));