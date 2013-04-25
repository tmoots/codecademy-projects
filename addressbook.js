//Creating two objects to be entries in my address book
var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

//Storing the objects in an array
var contacts = [bob, mary];

//Creating a function to print one person's first and last name
function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}

//Creating a function to print first and last names for the whole address book
function list() {
	var contactsLength = contacts.length;
	for (var i = 0; i < contactsLength; i++) {
		printPerson(contacts[i]);
	}
}

//Creating a function to search the address book by last name
function search(lastName) {
    var contactsLength = contacts.length;
    for (i=0; i<contactsLength; i++) {
        if (lastName == contacts.lastName) {
            printPerson(contacts[i]);
        }
    }
}

//Calling the search function passing "Jones"
search("Jones");

//Creating a function to add a new entry to the address book (or object to the array)
function add(first, last, phone, email) {
    var imogen = {
        firstName: first,
        lastName: last,
        phoneNumber: phone,
        email: email
    };
    contacts[contacts.length] = imogen;
}

//Calling the add function to add me to the address book
add("Imogen", "Wentworth", "07826 517 057", "imogen@imogenation.net");

//Calling the list function to print first and last names for the whole address book
list();