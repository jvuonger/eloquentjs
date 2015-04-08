/*jslint node: true */
'use strict';

/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
* * Eloquent Javascript Exercises
* * Chapter 2 - Program Structure
* * * * * * * * * * * * * * * * * * * * * * * * * * * */

/*
Exercise 1: Looping a Triangle

Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
####### */

for (var i = 0; i < 7; i++) {
	var string = "";

	do {
		string += "#";
  } while (string.length <= i);

  console.log(string + "\n");
}

/*
Exercise 2: FizzBuzz
Write a program that uses console.log to print all the numbers from 1 to 100, 
with two exceptions. For numbers divisible by 3, print "Fizz" instead of the 
number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz", for numbers 
that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers 
divisible by only one of those). */

function FizzBuzz() {
	var lastNum = 100;
	var currentNum = 1;

	while (currentNum <= lastNum) {
		var remainder_3 = currentNum % 3;
		var remainder_5 = currentNum % 5;

		if (remainder_3 === 0 && remainder_5 === 0){
			console.log("FizzBuzz");
		} else if(remainder_3 === 0){
			console.log("Fizz");
		} else if(remainder_3 !== 0 && remainder_5 === 0){
			console.log("Buzz");
		} else {
			console.log(currentNum);
		}

		currentNum++;
	}
}

function FizzBuzzReduced() {
	for (var i = 1; i <= 100; i++) {
		if (i % 15 === 0){
			console.log("FizzBuzz");
		} else if (i % 3 === 0) {
			console.log("Fizz");
		} else if (i % 5 === 0) {
			console.log("Buzz");
		} else {
			console.log(i);
		}
	}
}

/*
Exercise 3: Chess Board

Write a program that creates a string that represents an 8×8 grid, using newline
characters to separate lines. At each position of the grid there is either a 
space or a “#” character. The characters should form a chess board.

Passing this string to console.log should show something like this:

 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #

When you have a program that generates this pattern, define a variable size = 8 
and change the program so that it works for any size, outputting a grid of the 
given width and height. */

function SetUpChessBoard(size) {
	var whiteSpace = " ";
	var blackSpace = "#";
	var firstBlockIsWhite = true;
	var finalGrid = "";

	for (var x = 0; x < size; x++) {
		var row = "";

		for (var y = 0; y < size; y++) {
			if (firstBlockIsWhite) {
				if (y % 2 === 0) {
					row += whiteSpace;
				} else {
					row += blackSpace;
				}
			} else {
				if (y % 2 === 0) {
					row += blackSpace;
				} else {
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