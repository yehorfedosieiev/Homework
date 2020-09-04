'use strict';

alert("1. Создайте объект person, описывающий персону, с произвольным количеством произвольных полей. С помощью оператора in или typeof проверьте наличие в объекте свойства, прочитанного из prompt, и выведите его на экран. Если свойства нет, то добавляйте его в объект со значением, которое также запрашивается из prompt.");

let person = {
    name: "John",
    surname: "Doe",
    birthData: "25.07.1977",
    sex: true,
    familyStatus: "married"
};

while(true){
    let str = prompt("Какое св-во/ключ объекта person Вы хотите посмотреть","name");
    if (str === null) break;
    else{
        if (str in person) alert (`${str} = ` + person[str]);
        else{
            person[str] = prompt(`Введите значение св-ва/ключа ${str}`,"");
        }
    }    
}

alert("2. Сгенерируйте объект, описывающий модель телефона, заполнив все свойства значениями, прочитанными из prompt (например: brand, model, resolution, color...), не используя вспомогательные переменные. Добавьте этот гаджет персоне, созданной ранее.");

let phoneModel = {
    brand: "",
    model: "",
    resolution: "",
    color: "",
    memory: "",
    cost: ""
};

for (let key in phoneModel){
    phoneModel[key] = prompt(`Введите значение ${key}`,"");
}

person.phoneModel = phoneModel;

alert("Смотри консоль");
console.log(person);