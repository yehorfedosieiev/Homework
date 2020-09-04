'use strict';

alert("6.Создайте структуру данных, полностью описывающую html-разметку картинки. С помощью методов jQuery добавьте ее на страницу со всеми атрибутами, читая значения свойств из созданного объекта.");

let elementObj = {
    img:{
        src: "https://www.google.com.ua/logos/doodles/2017/bella-akhmadulinas-80th-birthday-5134676388741120.3-law.gif",
        alt: "",
        style: "border: 1px solid #ccc",
        width: "200"
    }
}
let $iddiv = $("#iddiv");

for (let key in elementObj){
    let $element = $(`<${key}>`).appendTo($iddiv);
    for (let addkey in elementObj[key]){
        $element.attr(addkey, elementObj[key][addkey]);
    }
}