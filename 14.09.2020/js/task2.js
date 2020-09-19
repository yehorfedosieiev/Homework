'use strict';

alert("2.Создайте объект coffeeMachine со свойством message: ‘Your coffee is ready!’ и методом start(), при вызове которого – coffeeMachine.start() – через 3 секунды появляется окно с сообщением, записанным в свойстве объекта message.");

let coffeeMachine = {
    message: "Your coffee is ready!",
    //первый вариант без потери контекста - Стрелочные функции не имеют собственного this, они исполняются в том контексте, в котором были созданы.
    // start (){
    //     setTimeout(()=>{
    //         alert(this.message);
    //     }, 3000);
    // }
    //второй вариант - необходимо использовать bind т.к.:
    
    // setTimeout(function(){
    //     alert(this.message);
    // }, 3000);
    
    // можно расписать как
    
    // function fn() {
    //     alert(this.message);
    // }
    // setTimeout(fn, 3000);
    
    // через три секунды будет вызов fn() - контекст вызова не указан
    start(){
        setTimeout(function(){
            alert(this.message);
        }.bind(this), 3000);
    }
}

coffeeMachine.start();