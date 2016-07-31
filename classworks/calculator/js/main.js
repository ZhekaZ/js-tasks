'use strict'

/* Задача 1: Калькулятор
Создайте объект calculator с тремя методами:

- read() запрашивает prompt два значения и сохраняет их как свойства объекта
- sum() возвращает сумму этих двух значений
- mul() возвращает произведение этих двух значений

Как должно работать:

var calculator = { ...ваш код... }

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() ); */



// var calculator = {
// 	read : function() {
// 		this.a = prompt('введите 1e значение', '');
// 		this.b = prompt('введите 2e значение', '');
// 	},

// 	sum : function() {
// 		return +this.a + +this.b;
// 	},

// 	mul : function() {
// 		return +this.a * +this.b;
// 	}
// }

// calculator.read();

// console.log(calculator.mul());

/*
Задача 2.1: Создать Calculator при помощи конструктора

Напишите функцию-конструктор Calculator, которая создает объект с тремя методами:
- Метод read() запрашивает два значения при помощи prompt и запоминает их в свойствах объекта.
- Метод sum() возвращает сумму запомненных свойств.
- Метод mul() возвращает произведение запомненных свойств.

Пример использования:

var calculator = new Calculator();
calculator.read();
alert( "Сумма=" + calculator.sum() );
alert( "Произведение=" + calculator.mul() );

*/

// function Calculator() {
// 	this.read = function() {
// 		this.a = prompt('введите 1e значение', '');
// 		this.b = prompt('введите 2e значение', '');
// 	};

// 	this.sum = function() {
// 		return +this.a + +this.b;
// 	};

// 	this.mul = function() {
// 		return +this.a * +this.b;
// 	}
// }

// var calculator = new Calculator();

// calculator.read();

// console.log(calculator.mul());

/* Задача 2.2: Создать Accumulator при помощи конструктора

Объект должен:
- Хранить текущее значение в своём свойстве value. Начальное значение свойства value
  ставится конструктором равным startingValue.
- Метод read() вызывает prompt, принимает число и прибавляет его к свойству value.

Пример:
var accumulator = new Accumulator(1); // начальное значение 1
accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению
alert( accumulator.value ); // выведет текущее значение
*/


function Accumulator(startingValue) {
	this.value = startingValue;

	this.read = function() {
		return this.value += +prompt('введите значение', '');
	};
}

var accumulator = new Accumulator(1);

console.log(accumulator.read());
console.log(accumulator.read());


/* Задача 2: Цепочка вызовов

Есть объект «лестница» ladder:

var ladder = {
  step: 0,
  up: function() {
    // вверх по лестнице
    this.step++;
  },
  down: function() {
    // вниз по лестнице
    this.step--;
  },
  showStep: function() {
    // вывести текущую ступеньку
    alert( this.step );
  }
}; 

Сейчас, если нужно последовательно вызвать несколько методов объекта, это можно сделать так:

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1 

Модифицируйте код методов объекта, чтобы вызовы можно было делать цепочкой, вот так:

ladder.up().up().down().up().down().showStep(); // 1 

И прочувствуйте себя разрабами jQuery! :) */


// var ladder = {
//   step: 0,
//   up: function() {
//     // вверх по лестнице
//     this.step++;

//     return this
//   },
//   down: function() {
//     // вниз по лестнице
//     this.step--;

//     return this
//   },
//   showStep: function() {
//     // вывести текущую ступеньку
//     console.log( this.step );

//     return this
//   }
// }; 

// ladder.up().up().down().up().down().showStep(); // 1
