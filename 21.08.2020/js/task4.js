'use strict';

alert("В переменную age запишите возраст человека. Если значение больше или равно 20 и меньше 30, в alert выводится “Выслать повестку”.");

var x = +prompt('Сколько Вам лет', '');

if (x >= 20 && x < 30){
    alert ("You are in the army now!!!");
}
else{
    alert ("Солдат ребенка не обидит!!!");
}