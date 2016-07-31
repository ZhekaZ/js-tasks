/* Task 2: Фильтрация через функцию

Создайте функцию filter(arr, func), которая получает массив arr и возвращает новый, в который входят только те элементы arr,
для которых func возвращает true.

Создайте набор «готовых фильтров»: inBetween(a,b) – «между a,b», inArray([...]) – "в массиве [...]". Использование должно быть таким:

filter(arr, inBetween(3,6)) – выберет только числа от 3 до 6,
filter(arr, inArray([1,2,3])) – выберет только элементы, совпадающие с одним из значений массива.
Пример, как это должно работать:

//ваш код для filter, inBetween, inArray

var arr = [1, 2, 3, 4, 5, 6, 7];

alert(filter(arr, function(a) {
  return a % 2 == 0
})); // 2,4,6

alert( filter(arr, inBetween(3, 6)) ); // 3,4,5,6

alert( filter(arr, inArray([1, 2, 10])) ); // 1,2

*/

'use strict'

var arr = [1, 2, 3, 4, 5, 6, 7];

// console.log(filter(arr, function(a) {
//   return a % 2 == 0
// })); // 2,4,6

// 1
function filter(arr, func) {
  var newArr = [];

  //var sotedIndex = func(arr[i]);

  for(var i = 0; i < arr.length; i++) {
    var sotedIndex = arr[i];

    if(func(sotedIndex)) {
      newArr.push(sotedIndex);
    }
  }

  return newArr;
}


// 2
// function inBetween(a, b) {
//   return function(num) {
//     return num >= a && num <=b;
//   }
// }

// console.log(filter(arr, inBetween(3, 6)));


//3
function inArray(arr) {
  return function(value) {
  //  var arrValue = arr.indexOf(value);

//      return arrValue != -1;

      for(var i=0; i < arr.length; i++) {
        if(arr[i] == value) {
          return true;
        }
      }
    }

    return false;
  }


console.log(filter(arr, inArray([1, 2, 10])));