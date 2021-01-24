//question 1
var outOfStock= true;

if(outOfStock === false){
    console.log("Out of stock");
}
else{
    console.log("In stock");
}

//question 2

for (var i = 15; i < 25; i++) {
    console.log(i);
 }
 

 //question 3

 var games = [
	{
		title: "Grand Theft Auto",
		rating: 4.48,
	},
	{
		title: "Portal 2",
		rating: 3.5,
	},
	{
		title: "Team Fortress",
		rating: null,
	},
	{
		title: "The Witcher",
		rating: 3.0,
	},
	{
		title: "The Elder Scrolls",
		rating: 2.9,
	},
];

for( i = 0; i <games.length; i++){
	if(games[i].rating < 3.5){
		console.log(games [i].title + ", " + games [i].title)
	}
}

//question 4


function whatIDontLike(food) {
    return Object.prototype.toString.call(food) === '[object String]';
}
 
const val = "Fish";
 
if (whatIDontLike(val))
{
    console.log("I dont like fish");
}
else
{
	console.log("Please send in a string");
}

//question 5

function arguments(argument1, argument2) {
	var convertOne = parseFloat(argument1);
	var convertTwo = parseFloat(argument2);
	
	if (isNaN(convertOne) || isNaN(convertTwo)) {
		return "Invalid Arguments";
	}
	
	
	}



//question 6

var buttonTitle = document.querySelector(".page");
var h1 = document.querySelector('h1')
var anchor = document.createElement('a')


function changeT() {
    document.title = "Updated title";
    document.body.style.backgroundColor = "yellow";
    document.querySelector('h1').style.color = "green";
    document.querySelector('h1').style.fontFamily = "Impact";
    h1.innerHTML = anchor;
    anchor.innerHTML = "Programming Foundations Course Assignment";
    anchor.href="www.google.com";
    h1.appendChild(anchor);
    document.querySelector('a').style.textDecoration = "none";
    document.querySelector('a').style.padding = "0";
   
    
    document.querySelector('.games').style.textDecoration = "none";
    document.querySelector('.games').style.padding = "0";
}

buttonTitle.onclick = changeT;

//question 7