'use strict';

alert("Чтобы добраться домой, вас устраивают маршрутки номер 7, 225 и 255. Какая маршрутка приехала – определяется в prompt. Если ваша, то вы едете домой, в противном случае – ожидаете.");

var busNumber = +prompt('Какая маршрутка подъехала?', '');

switch (busNumber){
    case 7:
    case 225:
    case 255: alert ("Скорее забирайся - пора ехать!"); break;
    default: alert ("Подождем, твою маму? Подождем, твою мать!");
}