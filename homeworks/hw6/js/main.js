// 1. Напишите функцию getLastDayOfMonth(year, month), которая возвращает последний день месяца.

// Параметры:

// year – 4-значный год, например 2012.
// month – месяц от 0 до 11.
// Например, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).

'use strict'


// function getLastDayOfMonth(year, month) {
// 	var date = new Date(year, month, 0);
// 	return date.getDate();
// }

// console.log(getLastDayOfMonth(2016, 2));


//2. Task 3: Сколько секунд уже прошло сегодня?

// Напишите функцию getSecondsToday() которая возвращает, сколько секунд прошло с начала сегодняшнего дня.

// Например, если сейчас 10:00 и не было перехода на зимнее/летнее время, то:

// getSecondsToday() == 36000 // (3600 * 10)
// Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.

function getSecondsToday() {
	var now = new Date();

	var today = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();

	return today
}

console.log(getSecondsToday());