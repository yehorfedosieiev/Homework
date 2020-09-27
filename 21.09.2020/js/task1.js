'use strict';

// Добавьте в прототип конструктора Date метод для форматирования любой даты по определенному формату: Date.prototype.format.
//Символы форматирования частей даты можете взять любые из существующих, в примере - отсюда

// var d = new Date();
// d = d.format('Y-m-d');
// console.log(d); // 2018-09-10


alert("1.Добавьте в прототип конструктора Date метод для форматирования любой даты по определенному формату: Date.prototype.format.");

Date.prototype.format = function(str){
    var line = "";
    for (let i = 0; i < str.length; i++){
        switch (str[i]){
            case "Y": line = line + this.getFullYear(); break;
            case "m": line = line + (this.getMonth() + 1); break;
            case "M":{
                switch (this.getMonth()){
                    case 0: line = line + "January"; break;
                    case 1: line = line + "February"; break;
                    case 2: line = line + "March"; break;
                    case 3: line = line + "April"; break;
                    case 4: line = line + "May"; break;
                    case 5: line = line + "June"; break;
                    case 6: line = line + "July"; break;
                    case 7: line = line + "August"; break;
                    case 8: line = line + "September"; break;
                    case 9: line = line + "October"; break;
                    case 10: line = line + "November"; break;
                    case 11: line = line + "December"; break;
                }; break;
            }
            case "d": line = line + this.getDate(); break;
            case "D":{
                switch (this.getDay()){
                    case 1: line = line + "Monday"; break;
                    case 2: line = line + "Tuesday"; break;
                    case 3: line = line + "Wednesday"; break;
                    case 4: line = line + "Thursday"; break;
                    case 5: line = line + "Friday"; break;
                    case 6: line = line + "Saturday"; break;
                    case 0: line = line + "Sunday"; break;
                }; break;
            }
            default: line = line + str[i];
        };
    };
    return line;
};

let myDate = new Date;

console.log(myDate.format("Y-M-d/D"));