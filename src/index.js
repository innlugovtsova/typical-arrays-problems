
exports.min = function min (array) {
  
 if (array === undefined) {
		return 0;
	} else if (array.length === 0) {
		return 0;
	} else {
		let newMas = array.sort();
		newMas.sort( (a,b) => a - b );
		return newMas[0];
	}
  
}

exports.max = function max (array) {

  if (array === undefined) {
		return 0;
	} else if (array.length === 0) {
		return 0;
	} else {

		let newMas = array.slice();
		newMas.sort( (a,b) => a - b );
		return newMas.pop();
	}
  
}

exports.avg = function avg (array) {
  
  if (array === undefined) {
		return 0;
	} else if (array.length === 0) {
		return 0;
	} else {
		let sum = 0;
		for (i = 0; i < array.length; i++) {
			sum += array[i];
		}
		return sum / array.length;
	}
  
}
