//Prompts user to answer an initial question
var user = prompt("You're exploring a new planet when you meet a monster. Do you freeze, run or smile?").toLowerCase();

//Switch statement to handle user response
switch(user) {
	case 'freeze' :
	//Further questions if user chooses 'freeze'
	var scared = prompt("You freeze. Is it because you're scared?").toLowerCase();
	var brave = prompt("Are you feeling brave?").toLowerCase();
		//If else statement to handle user response
		if (scared === 'yes' || brave === 'no') {
			console.log("Oh noes, fear makes the monster hungry. It eats you!");
		}
		else {
			console.log("Despite your freezing, you manage to muster the motivation to move and narrowly escape the monster. Well done!");
		}
	break;
	case 'run' :
	//Further questions if user chooses 'run'
	var fast = prompt("You start to run, but you'll have to be fast. Are you?").toLowerCase();
	var nimble = prompt("Fast is no good if you can't jump over rocks on this planet. Are you nimble?").toLowerCase();
		//If...else statement to handle user response		
		if (fast === 'yes' && nimble === 'yes') {
			console.log("Look at you go! You escape in no time. This monster's no match for you.");
		}
		if (fast === 'yes' && nimble === 'no') {
			console.log("You're speedy, but that's not enough. You get tangled in a tree branch and eaten for dinner.");
		}
		else {
			console.log("You make a determined effort, but eventually the monster catches up. You're just not fast enough. You're dinner.");
		}
	break;
	case 'smile' :
		//Response if user chooses 'smile'	
		console.log("Yay, the monster is friendly. You decide to hang around for a chat and a picnic and share some marmalade sandwiches.");
	break;
	default:
		//Response if user types something other than 'freeze', 'run' or 'smile'
		console.log("Hmmm, I didn't understand that. Try again?");
}