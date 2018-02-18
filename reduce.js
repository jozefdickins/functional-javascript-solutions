function countWords(inputWords) {

	return inputWords.reduce(function(arrObj, word) {
		if(!arrObj[word]) {
			arrObj[word] = 1;
		} else {
			arrObj[word] += 1;
		}

		return arrObj;
	}, {});

}


module.exports = countWords;