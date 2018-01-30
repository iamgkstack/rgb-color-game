var numberOfSquares = 6;
var colors = generateRandomColor(numberOfSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDiplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
colorDisplay.textContent = pickedColor;


for(var i=0;i<modeButtons.length;i++){
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");

	    this.textContent==="Easy"?numberOfSquares=3:numberOfSquares=6;
		

		reset();

		//figure out how many square to show
		//piock new color
		//pick a new pickedNew color
		//update page to reflect changes
	});
}

function reset(){
	// generate all new colors
	colors=generateRandomColor(numberOfSquares);

	// picked a new random color from array
	pickedColor=pickColor();

	// change color dispaly to matched color;
	colorDisplay.textContent=pickedColor;
	resetButton.textContent="New Colors"
	messageDisplay.textContent="";

	// change colors of square
	for(var i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.display="block";
			squares[i].style.backgroundColor=colors[i];
		}else{
			squares[i].style.display="none";
		}
		
	}
	h1.style.backgroundColor="steelblue"

}



// easyBtn.addEventListener("click",function(){
// 	hardBtn.classList.remove("selected");
// 	easyBtn.classList.add("selected");
// 	numberOfSquares=3
// 	colors=generateRandomColor(numberOfSquares);
// 	pickedColor=pickColor();
// 	colorDisplay.textContent=pickedColor;
// 	for(var i=0;i<squares.length;i++){
// 		if(colors[i]){
// 			squares[i].style.backgroundColor=colors[i];
// 		}else{
// 			squares[i].style.display="none";
// 		}
// 	}
// });

// hardBtn.addEventListener("click",function(){
// 	hardBtn.classList.add("selected");
// 	easyBtn.classList.remove("selected");
// 	numberOfSquares=6;
// 	colors=generateRandomColor(numberOfSquares);
// 	pickedColor=pickColor();
// 	colorDisplay.textContent=pickedColor;
// 	for(var i=0;i<squares.length;i++){
		
// 			squares[i].style.backgroundColor=colors[i];
		
// 			squares[i].style.display="block";
		
// 	}
// });

resetButton.addEventListener("click",function(){
	// // generate all new colors
	// colors=generateRandomColor(numberOfSquares);

	// // picked a new random color from array
	// pickedColor=pickColor();

	// // change color dispaly to matched color;
	// colorDisplay.textContent=pickedColor;
	// this.textContent="New Colors"
	// messageDisplay.textContent="";

	// // change colors of square
	// for(var i=0;i<squares.length;i++){
	// 	squares[i].style.backgroundColor=colors[i];
	// }
	// h1.style.backgroundColor="steelblue"
	reset();

});

colorDisplay.textcontent=pickedColor;

for(var i=0;i<squares.length;i++){
	//add initial color to square
	squares[i].style.backgroundColor=colors[i];

	// add click listener to the square

	squares[i].addEventListener("click", function(){
		var clickedColor=this.style.backgroundColor;

		// compare picked color to the clicked color

		if(pickedColor===clickedColor){
			messageDisplay.textContent="Correct";
			resetButton.textContent="Play Again?";
			changeColor(clickedColor);
			h1.style.backgroundColor=clickedColor;
		}else{
			this.style.backgroundColor="#232323";
			messageDisplay.textContent="Try again!!!";
		}
	});
}

function changeColor(color){
	// loop through all squares....

	for(var i=0; i<squares.length;i++){
		//change each color to the correct picked color
		squares[i].style.backgroundColor=color;
	}
}

function pickColor(){
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColor(num){

	//make an array
	var arr=[];

	// loop through all squares
	for(var i=0;i<num;i++){

		// change each color to match given color

		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	// pick red color from 0 to 255
	var r=Math.floor(Math.random()*256);

	// pic green color from 0 to 255;

	var g=Math.floor(Math.random()*256);

	// pick blue color from 0 to 255
	var b=Math.floor((Math.random()*256));

	return "rgb("+ r +", "+ g + ", "+ b + ")";

}