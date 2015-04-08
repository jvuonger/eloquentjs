/*jslint node: true */
'use strict';

/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
* * Eloquent Javascript Exercises
* * Chapter 3 - Functions
* * * * * * * * * * * * * * * * * * * * * * * * * * * */

/* 
Exercise 1: Minimum

The previous chapter introduced the standard function Math.min that returns its 
smallest argument. We can do that ourselves now. Write a function min that takes 
two arguments and returns their minimum.*/

function min(n1, n2) {
	return n1 <= n2 ? n1 : n2;
}

console.log(min(0, 10)); // → 0
console.log(min(0, -10)); // → -10

/*
Exercise 2: Recursion

Here’s another way to define whether a positive whole number is even or odd:
 - Zero is even.
 - One is odd.
 - For any other number N, its evenness is the same as N - 2.

Define a recursive function isEven corresponding to this description. The function 
should accept a number parameter and return a Boolean. */

function isEven(number) {
	if (number < 0) {
		return isEven(-number);
	}

	if (number === 0) {
		return true;
	} else if (number === 1) {
		return false;
	} else {
		return isEven(number - 2);
	}
}

console.log(isEven(50)); // → true
console.log(isEven(75)); // → false
console.log(isEven(-1)); // → false
console.log(isEven(-2)); // → true
console.log(isEven(-75)); // → false

/*
Exercise 3: Bean Counting

You can get the Nth character, or letter, from a string by writing "string".charAt(N), 
similar to how you get its length with "s".length. The returned value will be a string 
containing only one character (for example, "b"). The first character has position zero, 
which causes the last one to be found at position string.length - 1. In other words, 
a two-character string has length 2, and its characters have positions 0 and 1.

Write a function countBs that takes a string as its only argument and returns a number 
that indicates how many uppercase “B” characters are in the string.

Next, write a function called countChar that behaves like countBs, except it takes a 
second argument that indicates the character that is to be counted (rather than counting 
only uppercase “B” characters). Rewrite countBs to make use of this new function. */

function countBs(string) {
	var bCount = 0;
	var strLength = string.length;

	for (var i = 0; i < string.length; i++) {
		if (string.charAt(i) === "B"){
			bCount++;
		}
	}

	return bCount;
}

console.log(countBs("BBC")); // → 2

function countChar(string, char) {
	var charCount = 0;
	var strLength = string.length;

	for (var i = 0; i < string.length; i++) {
		if (string.charAt(i) === char) {
			charCount++;
		}
	}

	return charCount;
}

console.log(countChar("BBC", "B")); // → 2
console.log(countChar("kakkerlak", "k")); // → 4

