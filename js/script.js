console.log('Yes, I have a few "easter eggs" here.');
console.log('Try running the "siteHelp()" function for the following parameters');
console.log('"lastname"');
var lastname = "lastname";
function siteHelp(input) {
	switch(input) {
		case "lastname":
			console.log("I've found it important that people can pronounce my last name as it's often pronounced incorrectly. You can read more about it at the wikipedia page here. https://en.wikipedia.org/wiki/Nguyen#Pronunciation");
			break;
		default:
			console.log("This was not one of the options.");
	} 
}

