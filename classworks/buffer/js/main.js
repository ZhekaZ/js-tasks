'use strict'
//buffer with cleaner

var buffer = makeBuffer();

function makeBuffer() {
	var result = '';

	return function buffer(value) {
		if(value == undefined) {
			return result;
		} 

		result += ' ' + value;
		
	}

	buffer.clear = function() {
		result = '';
	}
}

buffer('Замыкания');
buffer('Использовать');
buffer('Нужно');


console.log(buffer());