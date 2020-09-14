'use strict';

alert("5.	Изучите перебирающие методы массивов: forEach, filter, map. Создайте массив объектов users (~10 объектов), каждый объект имеет поля firstname, lastname, age с разными значениями, у некоторых есть поле middlename. Используя встроенные функции массивов:\na.	Отфильтруйте пользователей младше 18 лет\nb.	Добавьте каждому объекту поле fullName, которое является конкатенацией firstname, middlename и lastname, если есть все три, и только firstname и lastname, если middlename нет\nc.	Сформируйте новый массив, который содержит только полное имя пользователей");

let data = [
    {
        firstname: "qwerty",
        lastname: "asdfgh",
        age: 18
    },
    {
        firstname: "afdfadf",
        lastname: "fgjghjgh",
        age: 10
    },
    {
        firstname: "khjhk",
        middlename: "234242",
        lastname: "rtyrtyrt",
        age: 45
    },
    {
        firstname: "qweqwe",
        lastname: "azzchfhf",
        age: 11
    },
    {
        firstname: "zxczxczx",
        middlename: "13sfd",
        lastname: "zxczxczvxc",
        age: 19
    },
    {
        firstname: "qwerty",
        lastname: "asdfgh",
        age: 36
    },
    {
        firstname: "qwercvbcvty",
        middlename: "123180809",
        lastname: "asd123123fgh",
        age: 45
    },
    {
        firstname: "qwerty12313",
        lastname: "68678678asdfgh",
        age: 21
    },
    {
        firstname: "cxbnmljqwerty",
        middlename: "00999548",
        lastname: "asdfghiopiert",
        age: 11
    },
    {
        firstname: "qwsdfsdferty",
        lastname: "asd12313123fgh",
        age: 21
    }
]

function handleIteration(item) {
    console.log(item);
    item.fullname = 'middlename' in item 
        ? item.firstname + ' ' + item.middlename + ' ' + item.lastname
        : item.firstname + ' ' + item.lastname;
}

data.forEach(handleIteration);

console.log(data);

let newData = data.map(function(item) {
   return item.middlename ? item.fullname : null;
});

console.log(newData);

let filterData = newData.filter(item => item);

console.log(filterData);
