'use strict';

alert("5.Создайте объект dates для хранения дат. Первая дата – позавчера. Вторая дата – текущая дата (new Date) минус 365 дней. Из prompt читается дата в формате yyyy-MM-dd. Проверьте, попадает ли введенная дата в диапазон дат объекта dates.");

let myDate = new Date();

let str = prompt("Введите дату в формате yyyy-mm-dd","1986-08-06");

let dates = {
    afterYesterday: "",
    currentDayYearAgo: "",
    enterDate: ""
}

if (str === null) alert ("Введите данные");
else{
    dates.enterDate = Date.parse(str);
    dates.currentDayYearAgo = Date.parse(myDate.getFullYear()-1 + "-" + (myDate.getMonth()+1) + "-" + myDate.getDate());
    dates.afterYesterday = +myDate - 8.64e+7*2;

    if(dates.enterDate >= dates.currentDayYearAgo && dates.enterDate <= dates.afterYesterday){
        alert(`Введенная дата находится в промежутке текущим днем год назад и позавчерашним днем`);
    }
    else{
        alert(`Введенная дата не находится в промежутке текущим днем год назад и позавчерашним днем`);
    }
}