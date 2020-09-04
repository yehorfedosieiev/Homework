'use strict';

alert("4.Динамически (скриптом) создайте HTML элемент <dl>. Переберите в цикле (for..in) сгенерированный ранее объект person, добавляя dt - для имени свойства и dd - для значения свойства (работа с DOM - с использованием методов jQuery).");

let person = {
    name: "John",
    surname: "Doe",
    birthData: "25.07.1977",
    sex: true,
    familyStatus: "married",
    phoneModel:{
        brand: "qw",
        model: "we",
        resolution: "er",
        color: "rt",
        memory: "ty",
        cost: "yu"
    }
};

let $dl = $('<dl></dl>').appendTo('#iddiv');
for (let key in person){
    let $dt = $('<dt></dt>').appendTo($dl).text(key);
    if (typeof(person[key])!=="object"){
        $('<dd></dd>').appendTo($dl).text(person[key]);
    }
    else{
        let $ddadd = $('<dd>').appendTo($dl);
        let $dladd = $('<dl>').appendTo($ddadd);
        for (let addkey in person[key]){
            $('<dt>').appendTo($dladd).text(addkey);
            $('<dd>').appendTo($dladd).text(person[key][addkey]);
        }
    }
}