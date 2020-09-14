'use strict';

alert("7.Используя замыкание, напишите функцию createTimer, которая использует метод performance.now() для получения текущей временной метки и служит для замера времени выполнения другого кода:");

function createTimer(){
    let t1 = performance.now();
    return function (){
        let t2 = performance.now();
        return t2-t1;
    }
}

let timer = createTimer();
alert('!');
alert( timer() ); 