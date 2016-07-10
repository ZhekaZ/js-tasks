'use strict'

//1.20е февраля 12го года 3:12

// var now = new Date(2012, 1, 20, 3, 12);

// console.log(now);



//2. Создать функцию getWeekDay(date) которая выводит текущий день недели в формате "пн", "вт"..."вс"

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




//3. Создать функцию getDateAgo(date, days) 
 
var date = new Date(2012, 1, 20, 3, 12);

var days = new Date();

getDateAgo(date, 3);

function getDateAgo(date, days) {

	var daysAgo = days * (3600 * 24 * 1000);

	res = date - daysAgo;

	console.log(daysAgo);

}