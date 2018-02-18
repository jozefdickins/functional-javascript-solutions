function checkUsersValid(goodUsers) {
	return function allUsersValid(submittedUsers) {
		return submittedUsers.every(function(subU) {
			return goodUsers.some(function(goodU) {
				return subU === goodU;
			});
		});
	}
}


module.exports = checkUsersValid;