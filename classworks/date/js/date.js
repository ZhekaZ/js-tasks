'use strict'

//1.20е февраля 12го года 3:12

// var now = new Date(2012, 1, 20, 3, 12);

// console.log(now);



//2. Саздать функцию getWeekDay(date) которая выводит текущий день недели в формате "пн", "вт"..."вс"

// var date = new Date(2012, 1, 20, 3, 12);

// console.log(getWeekDay(date));


// function getWeekDay(date) {

// 	var day = date.getDay();

// 	switch(day) {
// 		case 0 : return 'sun';
// 				 break;

// 		case 1 : return 'mon';
// 		 		 break;
// 	}
// }


//3. Создайте функцию getDateAgo(date, days), которая возвращает число,
// которое было days дней назад от даты date.
 
var date = new Date(2012, 1, 20, 3, 12);

getDateAgo(date, 4);

function getDateAgo(date, days) {

	var daysAgo = days*(3600*1000*24);

	var newDate = date - daysAgo;


	var newData = new Date(newDate);

	console.log(newData);
}