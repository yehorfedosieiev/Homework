'use strict';

alert("В переменной month хранится текущий месяц (new Date()). Определите в какую пору года попадает этот месяц (зима, лето, весна, осень)");

let myDate = new Date ();
let month = myDate.getMonth();

switch (month){
    case 0:
        alert("Январь");
        break;
    case 1:
        alert("Февраль");
        break;
    case 2:
        alert("Март");
        break;
    case 3:
        alert("Апрель");
        break;
    case 4:
        alert("Май");
        break;
    case 5:
        alert("Июнь");
        break;
    case 6:
        alert("Июль");
        break;
    case 7:
        alert("Август");
        break;
    case 8:
        alert("Сентябрь");
        break;
    case 9:
        alert("Октябрь");
        break;
    case 10:
        alert("Ноябрь");
        break;
    case 11:
        alert("Декабрь");
        break;
}

if (month === 11 || month === 0 || month === 1) alert ("Зима");
else if (month === 2 || month === 3 || month === 4) alert ("Весна");
else if (month === 5 || month === 6 || month === 7) alert ("Лето");
else alert("Осень");