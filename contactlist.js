//Creating contacts as objects
var friends = new Object();
friends.steve = {
	firstName: "Steve",
	lastName: "Jobs",
	number: "(000) 555-5555",
	address: ['1 Infinite Loop','Cupertino','CA','95014']
};
friends.bill = {
	firstName: "Bill",
	lastName: "Gates",
	number: "(000) 555-5555",
	address: ['1 Microsoft Way','Redmond','WA','98052']
};
friends.imogen = {
	firstName: "Imogen",
	lastName: "Wentworth",
	number: "(000) 555-5555",
	address: ['120 Locksbrook Road','Bath','UK']
};

//Writing a function to print a person in the list
var list = function(obj) {
	for (var person in obj) {
		console.log(person);
	}
};

//Writing a function to search for a contact by first name
var search = function(name) {
	for (var person in friends) {
		if (friends[person].firstName === name) {
			console.log(friends[person]);
			return friends[person];
		}
	}
};

//Calling the list and search functions to search for me and print my detailss
list(friends);
search("Imogen");