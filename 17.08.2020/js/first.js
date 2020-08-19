'use strict';
// Задача 1
// var x = prompt('Введите Х', '1')
//     y = prompt('Введите Y', '1');

// alert( 'Сумма: ' + x + y );
alert ("Задача 1");
var x = prompt('Введите Х', '1'),
    y = prompt('Введите Y', '1');

alert( 'Сумма: ' + String(+x + +y) );

// Задача 2
// Создайте три переменные. Присвойте первой переменной случайное
// целочисленное значение. Вторая переменная равна первой переменной,
// увеличенной в три раза. Третья переменная равна сумме двух первых.
// Распечатайте все три.
alert ("Задача 2");
let firstNumber = Math.floor(Math.random()*1000),
    secondNumber,
    thirdNumber;

secondNumber = firstNumber*3;
thirdNumber = firstNumber + secondNumber;
alert ("Первое число = " + firstNumber + "; второе число = " + secondNumber + "; третье число = " + thirdNumber);

// Задача 3
// Создайте переменные firstName и lastName для хранение имени и фамилии,
// запишите в них значения из модального окна prompt. Выведите на экран приветствие
// (“What’s up John Doe”), используя конкатенацию и экранирование символов. Имя и фамилию
// выводите заглавными буквами независимо от того, как они были введены.
alert ("Задача 3");
let firstName = prompt("Введите имя:", ""),
    lastName = prompt("Введите фамилию:", "");

alert ("What\’s up" + firstName + " " + lastName + "?");

// Задача 4
// Создайте переменные x и y для хранения числа. Значения переменные получают из prompt.
// Рассчитайте произведение, частное, разность и сумму этих значений. Результат последовательно
// отобразите в модальном окне. (Процесс вычисления посмотрите в debugger.)
alert ("Задача 4");
let z;
x = +prompt('Введите Х', '1'),
y = +prompt('Введите Y', '1');
z = x * y;
// debugger
alert("Произведение " + x + " и " + y + " = " + z);
z = x / y;
// debugger
alert("Частное " + x + " и " + y + " = " + z);
z = x - y;
// debugger
alert("Разность " + x + " и " + y + " = " + z);
z = x + y;
// debugger
alert("Сумма " + x + " и " + y + " = " + z);

// Задача 5
// Космический корабль летит с Земли на Луну. Расстояние равно 384,400 км.
// Скорость полета корабля определяется в prompt. Рассчитайте, за какое время
// ваш космический корабль доберется до Луны.
alert ("Задача 5");
const DISTANCE = 384400;
let speed = +prompt('Введите скорость космического корабля, км/ч', '1');
alert ("Вы доберетесь до Луны за " + DISTANCE/speed + "ч");

// Задача 6
// Напишите программу, которая без использования оператора сравнения определяет,
// является ли целое число, введенное пользователем, нечётным (true/false). Результат отобразите в alert.
alert ("Задача 6");
let simpleNumber = +prompt("Введите число", "");
alert ("А число " + simpleNumber + " является четным? " + !Boolean(simpleNumber%2));

// Задача 7
// Напишите программу, которая проверяет (true/false), является ли значение, введенное пользователем, числом.
alert ("Задача 7");
simpleNumber = prompt("Введите что-нибудь", "");
alert ("Введенное значение " + simpleNumber + " число? " + !isNaN(simpleNumber));

// Задача 8
// Напишите калькулятор для конвертации единиц измерения количества информации (байт, килобайт, мегабайт, гигабайт).
// Значения считаются из prompt, результаты отображаются в alert. Используйте константы там, где это логически оправдано.
alert ("Задача 8");
let byteNumber = +prompt("Введите кол-во байтов", "");
alert(byteNumber + " байт - это " + byteNumber*Math.pow(2,3) + " бит; " +
      Math.round(byteNumber/Math.pow(2,10)) +" кБ; " +
      Math.round(byteNumber/Math.pow(2,20)*1e3)/1e3 + " МБ; " +
      Math.round(byteNumber/Math.pow(2,30)*1e6)/1e6 + " ГБ");

// Задача 9
// У Чжуан-цзы было N яблок, Цзэн-Цзы съел несколько. Чжуан-Цзы обвиняет Цзэн-Цзы в том, что он съел все яблоки,
// но Цзэн-Цзы возражает. Запишите повествование в переменных и выражениях, читая значения из prompt.
// Не используя операторы сравнения, покажите, правду говорит Цзэн-Цзы или ложь.
alert ("Задача 9");
let chuanDzi = +prompt("Сколько было яблок у Чжуан-цзы, шт", ""),
    dzenDzi = +prompt("Сколько яблок съел Цзэн-Цзы, шт", ""),
    rest = chuanDzi - dzenDzi;
alert("Съел ли Цзэн-Цзы все яблоки Чжуан-цзы? " + !Boolean(rest));

// Задача 10
// На сайте есть три колонки разной высоты, заданной в единицах измерения веб
// (значения вводятся в prompt в формате “50px”, “20px”...). Используя функцию из библиотеки Math,
// найдите наибольшее значение из трех и покажите его. Учтите, что Math.max не работает со строками.
alert ("Задача 10");
let firstColumn = parseInt(prompt("Введите значение 1-ой колонки", "50px")),
    secondColumn = parseInt(prompt("Введите значение 2-ой колонки", "20px")),
    thirdColumn = parseInt(prompt("Введите значение 3-ей колонки", "90px"));
alert("Самая большая колонка = " + Math.max(firstColumn, secondColumn, thirdColumn) + " px");

// Задача 11
// Запишите в переменную случайное число (Math.random()), умножьте его на 100 и округлите.
// Получите второе число из окна prompt. Сравните и отобразите в модальном окне: первое число
// меньше второго или нет, а также оба значения. Расчеты сделайте в одном выражении! (То есть в скобках метода alert.)
alert("Задача 11");
let xx = Math.round(Math.random()*100),
yy = +prompt("Веедите число", "");
alert("x < y = " + Boolean(xx<yy) + ", x=" + xx + ", y=" + yy);