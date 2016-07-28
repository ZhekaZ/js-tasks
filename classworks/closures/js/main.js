'use strict'

/* Задача 1: Сумма через замыкание

Напишите функцию sum, которая работает так: sum( a ) ( b ) = a+b. 

Например: 
sum(1)(2) = 3
sum(5)(-1) = 4 */

// function sum(a) {
// 	return function(b) {
// 		return a + b;
// 	}
// }

// console.log(sum(5)(-1));


//////////////////////////////////////////////////////////////////////////////////////////////


/* Задача 2: строковый буфер

Задача – реализовать строковый буфер на функциях в JavaScript, со следующим синтаксисом:
Создание объекта: var buffer = makeBuffer();
Вызов makeBuffer должен возвращать такую функцию buffer, которая при вызове buffer(value) добавляет значение в некоторое внутреннее хранилище, 
а при вызове без аргументов buffer() – возвращает его.


Пример:

function makeBuffer() { / ваш код / }

var buffer = makeBuffer();
// добавить значения к буферу
buffer('Замыкания');
buffer(' Использовать');
buffer(' Нужно!');

// получить текущее значение
alert( buffer() ); // Замыкания Использовать Нужно! */

var buffer = makeBuffer();

function makeBuffer() {
	var result = '';

	return function buffer(value) {
		if(value == undefined) {
			return result;
		} 

		result += ' ' + value;
		
	}
}

buffer('Замыкания');
buffer('Использовать');
buffer('Нужно');


console.log(buffer());