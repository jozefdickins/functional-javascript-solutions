function repeat(fn, num) {
	for(i = 0; i < num; i++) {
		fn();
	}

	return;
}

module.exports = repeat;