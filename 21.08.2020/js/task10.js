'use strict';

alert("Найдите и исправьте ошибки в коде:");

var x = +prompt('x', 0);
var error;

switch (String(x)) {
    case "0": error = 'На ноль делить нельзя'; break;
    case "1": error = 'На единицу делить бессмысленно'; break;
    case "NaN": error = 'Не математическая операция';
}

if (error) {
    alert(error);
} else {
    alert(100 / x);
}
