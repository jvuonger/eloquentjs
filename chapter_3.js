// Eloquent Javascript Exercises

/* * * * * * * * * * * * * * * * * * * * * * * 
* * Chapter 3
* * * * * * * * * * * * * * * * * * * * * * */

/*****************************************************************************************
** Minimum
** Write a function min that takes two arguments and returns their minimum.
******************************************************************************************/
function min(n1, n2){
	return n1 < n2 ? n1 : n2;
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

/*****************************************************************************************
** Recursion
** Define a recursive function isEven corresponding to this description. 
** The function should accept a number parameter and return a Boolean.
******************************************************************************************/
function isEven(number){
	if(number < 0){
		return isEven(-number);
	}

	if(number === 0){
		return true;
	}else if(number === 1){
		return false;
	}else{
		return isEven(number - 2);
	}
}

console.log(isEven(50)); // → true
console.log(isEven(75)); // → false
console.log(isEven(-1)); // → false
console.log(isEven(-2)); // → true
console.log(isEven(-75)); // → false

/*****************************************************************************************
** Bean counting
** Write a function countBs that takes a string as its only argument and 
** returns a number that indicates how many uppercase “B” characters are in the string.
******************************************************************************************/
function countBs(string){
	var bCount = 0;
	var strLength = string.length;

	for(var i = 0; i < string.length; i++){
		if(string.charAt(i) === "B"){
			bCount++;
		}
	}

	return bCount;
}

console.log(countBs("BBC"));
// → 2

// Next, write a function called countChar that behaves like countBs, except it takes 
// a second argument that indicates the character that is to be counted 
function countChar(string, char){
	var charCount = 0;
	var strLength = string.length;

	for(var i = 0; i < string.length; i++){
		if(string.charAt(i) === char){
			charCount++;
		}
	}

	return charCount;
}
console.log(countChar("BBC", "B"));
// → 2

console.log(countChar("kakkerlak", "k"));
// → 4

