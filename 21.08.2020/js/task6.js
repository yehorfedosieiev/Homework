'use strict';

alert("В переменную day записан текущий день недели. Если это не суббота и не воскресенье, выведите в alert сентенцию о необходимости идти на работу.");

var dayWeek = prompt('Какой сейчас день недели:\n Mon;\n Tue;\n Wed;\n Thu;\n Fri;\n Sat;\n Sun?', '');

switch (dayWeek){
    case "Mon":
    case "Tue":
    case "Wed":
    case "Thu":
    case "Fri": alert ("На работу!!!"); break;
    default: alert ("Можно поспать подолбше!!!");
}