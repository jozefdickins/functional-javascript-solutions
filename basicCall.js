function duckCount() {
	return Array.prototype.slice.call(arguments).filter(function(argObj) {
		return Object.prototype.hasOwnProperty.call(argObj, 'quack');
	}).length;
}

module.exports = duckCount;