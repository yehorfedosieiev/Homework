'use strict';

alert("6.Есть следующий код. Допишите код, чтобы в консоли браузера появились строки, которые написаны в комментариях.");

// Есть следующий код:
// var country = {
//     name: 'Ukraine',
//     language: 'ukrainian',
//     capital: {
//         name: 'Kyiv',
//         population: 2907817,
//         area: 847.66
//     }
// };

// function format(start, end) {
//     console.log(start + this.name + end);
// }


// Допишите код, чтобы в консоли браузера появились строки, которые написаны в комментариях:

// format.call(/* Ваш код */); // Ukraine
// format.apply(/* Ваш код */); // [Ukraine]
// format.call(/* Ваш код */); // Kyiv
// format.apply(/* Ваш код */); // Kyiv
// format.apply(/* Ваш код */); // undefined

const country = {
    name: 'Ukraine',
    language: 'ukrainian',
    capital: {
        name: 'Kyiv',
        population: 2907817,
        area: 847.66
    }
};

function format(start, end) {
    console.log(start + this.name + end);
}

format.call(country, "", ""); // Ukraine
format.apply(country, ["[", "]"]); // [Ukraine]
format.call(country.capital, "", ""); // Kyiv
format.apply(country.capital, ["", ""]); // Kyiv
format.apply(country.capital.name, ["", ""]); // undefined
