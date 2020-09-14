'use strict';

alert("6.Дан массив, элементами которого могут быть любые значения, включая другие массивы. Напишите функцию flat, которая рекурсивно “разворачивает” переданный массив на глубину depth, указанную в параметре функции. По умолчанию flat поднимает элементы на одну глубину (то есть если depth не указан).");

function flat (myArr, n = 1) {
 
    if (n === 1) {
      myArr.forEach((item) => {
        if (Array.isArray(item)) {
          for (let i = 0; i < item.length; i++) {
            myArr.push(item[i]);
          }
          myArr.splice(myArr.indexOf(item), 1);
        }            
      });
      return myArr;
    } else {
      return myArr = flat(myArr, n-1);
    } 
    
   }
   
   let data1 = [1, 2, [3, 4, [5, 6]]];
   let data2 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
   console.log( flat(data2, 1) ); 
   console.log( flat(data2, 2) ); 
   
//второй вариант

// let flat = (data, depth = 1) => {
// let arr = [];
// data.forEach(element => {
// if(Array.isArray(element)) {
//     arr.push(...element);
// } else {
//     arr.push(element);
// }
// });
// if (depth === 1) {
// return arr;
// } else {
// return flat( arr, depth-1 )
// }
// }
// var data1 = [1, 2, [3, 4, [5, 6]]];
// console.log(flat(data1));

// var data2 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
// console.log( flat(data2, 1) );
// console.log( flat(data2, 3) );