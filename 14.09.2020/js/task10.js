'use strict';

// Используя дескрипторы свойств создайте объект для описания местности со свойствами latitude, longitude и title.
// Свойства latitude и longitude могут содержать только цифры, все, что будет попадать в эти поля, становится числом.
// Если при преобразовании к числу получается NaN, то в качестве значения записывается null. То же для поля title,
// только все данные будут преобразовываться к строке.

alert("Используя дескрипторы свойств создайте объект для описания местности со свойствами latitude, longitude и title. Свойства latitude и longitude могут содержать только цифры, все, что будет попадать в эти поля, становится числом. Если при преобразовании к числу получается NaN, то в качестве значения записывается null. То же для поля title, только все данные будут преобразовываться к строке.");

let area = {
    latitude: 0,
    longitude: 0,
    title: ""
};

Object.defineProperties(area, {
    latitude: {
        set: function (value){
            if (!isNaN(value)) this._latitude = +value;
            else this._latitude = null;
        },
        get: function(){
            return this._latitude;
        }
    },
    longitude: {
        set: function (value){
            if (!isNaN(value)) this._longitude = +value;
            else this._longitude = null;
        },
        get: function(){
            return this._longitude;
        }
    },
    title: {
        set: function (value){
            if (!isNaN(value)) this._title = value;
            else this._title = String(value);
        },
        get: function(){
            return this._title;
        }
    }
});