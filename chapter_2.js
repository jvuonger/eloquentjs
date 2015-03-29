// Eloquent Javascript Exercises

/* * * * * * * * * * * * * * * * * * * * * * * 
* * Chapter 2
* * * * * * * * * * * * * * * * * * * * * * */

// Looping a Triangle
for(var i = 0; i < 7; i++){
	var string = "";

	do{
		string += "#";
  }while(string.length <= i);

  console.log(string + "\n");
}

// FizzBuzz
function FizzBuzz(){
	var lastNum = 100;
	var currentNum = 1;

	while(currentNum <= lastNum){
		var remainder_3 = currentNum % 3;
		var remainder_5 = currentNum % 5;

		if(remainder_3 === 0 && remainder_5 === 0){
			console.log("FizzBuzz");
		}else if(remainder_3 === 0){
			console.log("Fizz");
		}else if(remainder_3 !== 0 && remainder_5 === 0){
			console.log("Buzz");
		}else{
			console.log(currentNum);
		}

		currentNum++;
	}
}

function FizzBuzzReduced(){
	for(var i = 1; i <= 100; i++){
		if(i % 15 === 0){
			console.log("FizzBuzz");
		}else if(i % 3 === 0){
			console.log("Fizz");
		}else if(i % 5 === 0){
			console.log("Buzz");
		}else{
			console.log(i);
		}
	}
}

//Chess Board
//Set up Grid
// Alternate
// (0,0) = White, (0,1) = Black, (1,0) = Black, (1,1) = White
function SetUpChessBoard(size){
	size = size;
	var whiteSpace = " ";
	var blackSpace = "#";
	var firstBlockIsWhite = true;
	var finalGrid = "";

	for(var x = 0; x < size; x++){
		var row = "";

		for(var y = 0; y < size; y++){
			if(firstBlockIsWhite){
				if(y % 2 === 0){
					row += whiteSpace;
				}else{
					row += blackSpace;
				}
			}else{
				if(y % 2 === 0){
					row += blackSpace;
				}else{
					row += whiteSpace;
				}
			}
		}

		finalGrid += (row + "\n");
		firstBlockIsWhite = !firstBlockIsWhite; //Toggle first space color
	}

	console.log(finalGrid);
}

SetUpChessBoard(20);