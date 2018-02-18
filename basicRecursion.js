function reduce(arr, fn, initial) {
	/*
	if(arr.length <= 0) {
		return initial;
	}

	var remaining = arr.slice(1);
	var curr = arr[0];

	return reduce(remaining, fn, fn(initial, curr));
	*/

	return (function reduceOne(index, value) {
		if(arr.length - 1 < index) {
			return value;
		}

		return reduceOne(index + 1, fn(value, arr[index], index, arr))
	}) (0, initial);
}


module.exports = reduce;