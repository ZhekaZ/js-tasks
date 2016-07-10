'use strict'

function sum() {
	var res = 0;

	for(var i = 0; i < arguments.length; i++) {
		res += arguments[i];
	}

	return res;
}

console.log(sum(1, 3, 5));