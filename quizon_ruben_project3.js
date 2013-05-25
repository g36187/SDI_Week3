//alert("JavaScript works!");

/* Ruben Quizon
   SDI 1305
   Project 3
   JSONification! 
*/

// global variables
var heroFirstName = "Quest",
	heroLastName = "Questerson",
	currentLevel = 1,
	heroIsFamous = "False";
    
// chores method . 	more info
/*var chores = {
	"choreOne": "clean something",
	"choreFinished": false,
	"placesToDeliver": ["Harry\'s House","Ron\'s Hovel","Bob\'s Bungalow"],
	"deliverTo": function (){
		stuff goes here
	}
};

var choreName = chores. <--make loop //accessor
chores.deliverTo("pizza"); //mutator
var getPaid = chores.getMoney(howMuch); //function method
pirate.repairDamage(damage, ship);  // object argument //fix this later lol

*/

// fishermen three method . more info	

console.log ("His first taste of adventure came as a complete surpise when his small village");
console.log ("was attacked by a raiding group of old fishermen!");
console.log ("\nHe was captured and brought to the Captains Three.  Each had a special riddle");
console.log ("for him to answer.  If he wasn't able to answer them, he was to be fed to the fishes.\n");

var grabData = function (fisherman){
	for (var i = 0; i < fisherman.fishermanThree.length; i++) {
		var name = fisherman.fishermanThree[i];
		console.log (name.fisherName + "\'s riddle was \"" + name.fisherRiddle + "\"");
		console.log ("..and our hero answered \"" + name.fisherAnswer + "\"");
	}
};

grabData(fisherman);

// use this for reference

var cube = {
	"name": "Rubik",
	"length": 5,
	"width":  5,
	"height": 5,
	"isSquare": true,
	"area": function(){
		var totalArea = this.height * this.width * this.length; // don't use this in your own code ..use the getter, though
		return totalArea;
	}
};

console.log("The length of the cube is " + cube.length);
console.log(cube.area());


