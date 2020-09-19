'use strict';

alert("1.Создайте объект calculator с методами:\na.read() запрашивает prompt для двух значений и сохраняет их как свойства объекта x, y\nb.sum() возвращает сумму этих двух значений\nc.multi() возвращает произведение этих двух значений\nd.diff() возвращает разницу\ne.div() возвращает частное\n");

let calculator = {
    x: 0,
    y: 0,
    read (){
        let x = +prompt("Введите X");
        let y = +prompt("Введите Y");
        if (!isNaN(x) || !isNaN(y)){
			return this.x = x, this.y = y;
		} else {
			return alert('Wrong value');
		}
    },
    sum(){
        return this.x + this.y;
    },
    multi(){
        return this.x * this.y;
    },
    diff(){
        return this.x - this.y;
    },
    div(){
        let str = (this.y === 0) ? `${this.x} / ${this.y} = Infinity` : this.x / this.y;
        return str;
    }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.div() );

// Создайте объект с данными: x, y и методами: getSum, getDiff, getMulti, getDiv. 
// Методы объекта ничего не реализуют, а только выводят в alert сообщения вида ‘1 + 1 = 2’ 
// или ‘1 / 0 = Infinity’. Для расчетов все методы используют функционал ранее созданного 
// калькулятора.

// alert(me.getSum());
// alert(me.getDiv());

alert("5.Создайте объект с данными: x, y и методами: getSum, getDiff, getMulti, getDiv. Методы объекта ничего не реализуют, а только выводят в alert сообщения вида ‘1 + 1 = 2’ или ‘1 / 0 = Infinity’. Для расчетов все методы используют функционал ранее созданного калькулятора.");

let myObj = {
    x: calculator.x,
    y: calculator.y,
    getSum(){
        return `${this.x} + ${this.y} = ` + calculator.sum.apply(this);
        // return `${this.x} + ${this.y} = ` + calculator.sum(this);
    },
    getDiff(){
        return `${this.x} - ${this.y} = ` + calculator.diff.apply(this);
        // return `${this.x} - ${this.y} = ` + calculator.diff(this);
    },
    getDiv(){
        // return `${this.x} / ${this.y} = ` + calculator.div.apply(this);
        return `${this.x} / ${this.y} = ` + calculator.div(this);
    },
    getMulti(){
        return `${this.x} * ${this.y} = ` + calculator.multi.apply(this);
        // return `${this.x} * ${this.y} = ` + calculator.multi(this);
    }
};

alert(myObj.getSum());
alert(myObj.getDiv());