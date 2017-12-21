$(document).ready(function(){

	var user_id=1;

	start_game();
	//on start:
	function start_game(){
		console.log("in start")
		//add input field for name and submit button 
		var input=$("<div>");
		input.attr("class", "input-group");
		var inp_field=$("<input>");
		inp_field.attr("type","text");
		inp_field.attr("class","form-control");
		inp_field.attr("placeholder", "Name");
		input.append(inp_field);
		var span=$("<span>");
		span.attr("class","input-group-btn");
		span.append("<button id=start_button class=\"btn start btn-default\" type=\"button\">Start</button>")
		input.append(span);
		$(".welcome").html(input);
	}

	//create config and initialize firebase
	var config = {
		apiKey: "AIzaSyC7EIQlduhOVyli8CL6TlD1n2BpRE5XdFE",
		authDomain: "multiplayer-rsp.firebaseapp.com",
		databaseURL: "https://multiplayer-rsp.firebaseio.com",
		projectId: "multiplayer-rsp",
		storageBucket: "multiplayer-rsp.appspot.com",
		messagingSenderId: "501363044860"
	};
	firebase.initializeApp(config);

	//Create a var to reference firebase
	var database=firebase.database();

	// (make sure can submit with Enter key) to .welcome
	$(document).keyup(".start",function() {
		  if (event.keyCode == 13) {
		  	alert( "Handler for .keyup() called." );
		  	get_name();
		  }
		  else{return;}
	});

	//on click #start_button
	$(document).on("click","#start_button", get_name);

	//store the name
	function get_name(){
		var name=$(".form-control").val().trim();
		console.log("getting name: "+ name);
		var losses=0;
		var wins=0;
		database.ref('player/'+user_id).set({
			name: name,
			losses: 0,
			wins: 0
		});
	}
	


 // <div class="input-group">
 //      <input type="text" class="form-control" placeholder="Search for...">
 //      <span class="input-group-btn">
 //        <button class="btn btn-default" type="button">Go!</button>
 //      </span>
 //    </div><!-- /input-group -->
        




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


	//on new data if user_id 1 exists, make it 2
	// database.ref().on("value", function(snapshot){
	// 	console.log("snapshot.val().name "+snapshot.val().name);
	// 	console.log("snapshot.child(1).name "+snapshot.().name);
	// })

})
