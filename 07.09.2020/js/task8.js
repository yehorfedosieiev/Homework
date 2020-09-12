'use strict';

alert("8.Напишите функцию аналог метода ES6 Object.assign(). Первый параметр функции - целевой объект, поля которого будут изменены или расширены. Остальные параметры - объекты-источники, полями которых будет расширяться целевой объект.");

let source = {
    firstname: "Tom",
    age: 28
};

function extend (aimObject, ...rest){
    let clone = {};
    for(let key in aimObject){
        clone[key] = aimObject[key];
    }

    for(let i = 0; i < rest.length; i++){
        for(let key in rest[i]){
            clone[key] = rest[i][key];
        }
    }
    return clone;
}
console.log("Начальный объект");
console.log(source);
console.log("Расширенный объект");
let extendedObject = extend(source, {firstname: 'John'}, {lastname: 'Doe'});
console.log(extendedObject);