//on start:
//add input field for name and submit button 
//(make sure can submit with Enter key) to .welcome
//store the name

//when name exists for 1 user, display in .welcome
//"Welcome "+ name and wait for other player 
//Display name in box1

//When 2nd name exists:
//Display the name in box2
//Highlight box1
//1st user:
	//"It's your turn!" at the buttom of .welcome
	//can choose - display options in box1
//2nd user:
	//"Waiting for "+name1+" to choose" in .welcome
	
//When 1st user chooses:
//Highlight box2
//1st user:
	//"Waiting for "+name2+" to choose" in .welcome
	//Display choise1 in box1
//2nd user:
	//"It's your turn!" at the buttom of .welcome
	//can choose - display options in box2

//When 2nd user chooses:
//Display whoever picked what in box1 and box2
//Update wins and losses:
	//if choice1===choice2 - Tie Game
	//if ((S-P)||(P-R)||(R-S)) > W - L
	//if ((S-R)||(P-S)||(R-P)) > L - W
//depending on result, update wins and losses, display in box1 and box2
//Instead of "waiting for" or "your turn" display winner-name+" Wins!"

//Button or timer to next game?

//Chat:
//on click on Send button
//save text
//get name of user
//display name and text in chat-box

//disconnecting:
//on closing tab/window, remove data from firebase
//clear data of left user from site
//display highlighted message in chat-box name-left+" has disconnected."

