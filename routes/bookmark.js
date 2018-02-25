var data = require('../data.json');
var userData = require('../userData.json');

//return true if successfully bookmarked (user logged in);
//false otherwise (not logged in)
exports.bookmark = function(itemID)
{
	console.log("in routes/bookmark");

	if (userData.loginStatus)
	{
		userData.bookmarkedList.push(data[itemID]);

		return true;
	}

	console.log("not logged in; cannot bookmark");
	return false;
}

exports.updateUserData = function(usrData)
{
  userData = usrData;
};