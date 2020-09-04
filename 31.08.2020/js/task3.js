'use strict';

alert("3.Запустите бесконечный цикл. В цикле вызывайте prompt, в котором пишется либо delete, либо update. В зависимости от указанного действия, удаляйте или добавляйте (редактируйте) свойство в объекте персоны (которая уже имеет телефон). Какое именно свойство удалять или добавлять - также читается из prompt. Какое значение будет у добавленного свойства - тоже берется из prompt. При нажатии на Отмена при появлении prompt редактирование person заканчивается. И обновленные данные распечатываются в консоли.");

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

while (true){
    let str = prompt('Введите delete или update','');
    if (str===null) break;
    else{
        switch (str){
            case "update":{
                let keyUpdate = prompt("Какое св-во/ключ вы хотите обновить?","");
                if (keyUpdate===null) break;
                else{
                    if (typeof(person[keyUpdate]) === "object") {
                        let addKey = prompt("Введите дополнительное св-во/ключ в person." + keyUpdate + ", которое вы хотите обновить?","");
                        if (addKey===null) break;
                        else{
                            person[keyUpdate][addKey] = prompt("введите значение person." + keyUpdate + "." + addKey, "");
                        }
                    }
                    else{
                        person[keyUpdate] = prompt("введите значение person." + keyUpdate, "");
                    }
                }
            }; break;
            case "delete":{
                let keyDelete = prompt("Какое св-во/ключ вы хотите удалить?");
                if (keyDelete===null) break;
                else{
                    if (typeof(person[keyDelete]) === "object") {
                        let proof = prompt("Вы пытаетесь удалить person." + keyDelete + ", которое является объектом в объекте.\n Удалить целиком (yes) или конкретную часть (no)?","");
                        if (proof===null) break;
                        else{
                            switch(proof){
                                case "yes": delete person[keyDelete]; break;
                                case "no":{
                                    let addDelete = prompt("введите значение person." + keyDelete + " которое надо удалить", "");
                                    delete person[keyDelete][addDelete];
                                }; break;
                                default: alert("Непонятное значение!");
                            }
                        }
                    }
                    else{
                        delete person[keyDelete];
                    }
                }
            }; break;
            default: alert("Вы ввели неправильное действие");
        }
    }
}

alert("Смотри консоль");
console.log(person);