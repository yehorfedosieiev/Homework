'use strict';

alert("8.Создайте структуру(ы) для хранения данных, из которых можно составить таблицу соответствия значениям переменной (value) в логическом контексте (истина, ложь). Изобразите на странице.");

let elementObj = {
    img:{
        src: "./img/task8.jpg",
        alt: "task8",
        style: "border: 1px solid #ccc; display: block; margin-left: auto; margin-right: auto"
    }
}

let $iddiv = $(".divclass");

for (let key in elementObj){
    let $element = $(`<${key}>`).appendTo($iddiv);
    for (let addkey in elementObj[key]){
        $element.attr(addkey, elementObj[key][addkey]);
    }
}

let myArray = [
    {
        name: "true",
        value: true
    },
    {
        name: "false",
        value: false
    },
    {
        name: "1",
        value: true
    },
    {
        name: "0",
        value: false
    },
    {
        name: "\"\"",
        value: false
    },
    {
        name: "\"1\"",
        value: true
    },
    {
        name: "\"0\"",
        value: false
    },
    {
        name: "null",
        value: false
    },
    {
        name: "undefined",
        value: false
    },
    {
        name: "{}",
        value: true
    },
    {
        name: "[]",
        value: true
    },
    {
        name: "NaN",
        value: false
    }
];

let tableElement = document.createElement("table");
document.querySelector(".divtable").appendChild(tableElement);
tableElement.style.borderSpacing = "0px";
tableElement.style.margin = "auto";

let trElement = document.createElement("tr");
tableElement.appendChild(trElement);
for(let j = 0; j < myArray.length; j++){
    let tdElement = document.createElement("td");
    trElement.appendChild(tdElement);
    tdElement.innerText = myArray[j].name;
    tdElement.style.border = "1px solid #000";
    tdElement.style.width = "20px";
    tdElement.style.height = "60px";
    tdElement.style.background = "gray";
}

trElement = document.createElement("tr");
tableElement.appendChild(trElement);
for(let j = 0; j < myArray.length; j++){
    let tdElement = document.createElement("td");
    trElement.appendChild(tdElement);
    tdElement.innerText = myArray[j].value;
    tdElement.style.border = "1px solid #000";
    tdElement.style.width = "20px";
    tdElement.style.height = "20px";
    if (myArray[j].value === true) tdElement.style.background = "green";
    else tdElement.style.background = "red";   
}