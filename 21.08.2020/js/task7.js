'use strict';

alert("Создайте две переменные: greeting и lang. Переменная greeting – пустая строка. Переменная lang может принимать три значения: 'ru', 'en', 'de' (например, из prompt). Если она имеет значение 'ru', то в переменную greeting запишите приветствие на русском языке, если имеет значение 'en' – то на английском, если 'de' – на немецком. Выведите на экран приветствие в зависимости от значения переменной lang. Решите задачу через if-else и через switch-case.");

let greeting = "";
let lang = prompt('Какой язык предпочитаете:\n ru;\n en;\n de?', '');

alert("с помощью switch");

switch (lang){
    case "ru": greeting = "Привет!"; break;
    case "en": greeting = "Hello!"; break;
    case "de": greeting = "Guten Tag!"; break;
    default: alert ("Неправильный язык!!!");
}
if (greeting) alert(greeting);

alert("через if-else");

if (lang==="ru"){
    greeting = "Привет!";
} else if (lang==="en"){
    greeting = "Hello!";
} else if (lang==="de"){
    greeting = "Guten Tag!";
} else alert ("Неправильный язык!!!");

if (greeting) alert(greeting);