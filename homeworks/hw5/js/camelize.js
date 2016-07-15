// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

// То есть, дефисы удаляются, а все слова после них получают заглавную букву.

// P.S. Вам пригодятся методы строк charAt, split и toUpperCase.

function camelize(str) {
	var camelString,
		strArr;

	strArr = str.split(' ');

	for(var i = 1; i < strArr.length; i++) {
		var camelPart = strArr[i].slice(1);
		strArr[i] = strArr[i].charAt(0).toUpperCase() + camelPart;
	}

	return strArr.join('');
}

console.log(camelize('this is javasctipt'));