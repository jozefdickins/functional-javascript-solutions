function getShortMessages(messages) {

	return messages.filter(function(mssg) {
		return mssg.message.length < 50;
	}).map(function (item) {
		return item.message;
	});
}

module.exports = getShortMessages;