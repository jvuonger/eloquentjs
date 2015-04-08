/*jslint node: true */
'use strict';

/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
* * Eloquent Javascript Exercises
* * Chapter 4 - Data Structures: Objects and Arrays
* * * * * * * * * * * * * * * * * * * * * * * * * * * */

/* 
Exercise 1: The Sum of a Range

Write a range function that takes two arguments, start and end, and returns an array 
containing all the numbers from start up to (and including) end.

Next, write a sum function that takes an array of numbers and returns the sum of these 
numbers. Run the previous program and see whether it does indeed return 55.

As a bonus assignment, modify your range function to take an optional third argument 
that indicates the “step” value used to build up the array. If no step is given, the 
array elements go up by increments of one, corresponding to the old behavior. The 
function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works 
with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2]. */

function range(start, end, step) {
	var _arrayRange = [];

	if (!step || step === 0) step = 1;

	for (var x = start; (step < 0) ? x >= end : x <= end; x += step) {
		_arrayRange.push(x);
	}

	return _arrayRange;
}

console.log(range(1, 10));
console.log(range(1, 10, 2));
console.log(range(5, 2, -1));

function sum(arrayOfNumbers) {
	var sumOfNumbersInArray = 0;

	for (var index in arrayOfNumbers) {
		sumOfNumbersInArray += arrayOfNumbers[index];
	}

	return sumOfNumbersInArray;
}

console.log(sum(range(1, 10))); //55
console.log(sum(range(1, 10, 2))); //55

/*
Exercise 2: Reversing an Array

Arrays have a method reverse, which changes the array by inverting the order in 
which its elements appear. For this exercise, write two functions, reverseArray 
and reverseArrayInPlace. The first, reverseArray, takes an array as argument and 
produces a new array that has the same elements in the inverse order. The second, 
reverseArrayInPlace, does what the reverse method does: it modifies the array 
given as argument in order to reverse its elements. Neither may use the standard 
reverse method. */

function reverseArray(array) {
	var reversedArray = [];

	while (array.length) reversedArray.push(array.pop());

	return reversedArray;
}

console.log(reverseArray(["A", "B", "C"])); // → ["C", "B", "A"];

function reverseArrayInPlace(array) {
	var tempVal = '';

	for (var i = 0; i < array.length / 2; i++){
		tempVal = array[i];
		array[i] = array[array.length - 1 - i];
		array[array.length - 1 - i] = tempVal;
	}

	return array;
}

var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue); // → [5, 4, 3, 2, 1]

/*
Exercise 3: A List

Write a function arrayToList that builds up a data structure like the previous 
one when given [1, 2, 3] as argument, and write a listToArray function that 
produces an array from a list. Also write the helper functions prepend, which 
takes an element and a list and creates a new list that adds the element to 
the front of the input list, and nth, which takes a list and a number and returns 
the element at the given position in the list, or undefined when there is no 
such element. */

function arrayToList(array) {
	if (!array.length) return null;

	var list = {
		value: array.shift(),
		rest: arrayToList(array)
	};

	return list;
}

console.log(arrayToList([10, 20]));  // → {value: 10, rest: {value: 20, rest: null}}

function listToArray(list) {
	var arr = [];

  for (var l = list; list; list = list.rest) {
		arr.push(list.value);
  }

  return arr;
}

console.log(listToArray(arrayToList([10, 20, 30]))); // → [10, 20, 30]

function prepend(e, list) {
	return { value: e, rest: list };
}

console.log(prepend(10, prepend(20, null)));

function nth(list, n) {
	if (n === 0)
		return list.value;
	else
		return nth(list.rest, n - 1);
}

console.log(nth(arrayToList([10, 20, 30]), 1)); // → 20

/*
Exercise 4: Deep Comparison

Write a function, deepEqual, that takes two values and returns true only if they are 
the same value or are objects with the same properties whose values are also equal 
when compared with a recursive call to deepEqual.

To find out whether to compare two things by identity (use the === operator for that) 
or by looking at their properties, you can use the typeof operator. If it produces 
"object" for both values, you should do a deep comparison. But you have to take one 
silly exception into account: by a historical accident, typeof null also produces 
"object". */

function deepEqual(val1, val2) {
	if (((typeof val1 == 'object') && !!val1) && ((typeof val2 == 'object') && !!val2)) {
		if (Object.keys(val1).length != Object.keys(val2).length) {
			return false;
		}

		for (var property in val1) {
			if (val2.hasOwnProperty(property)) {
				if (!deepEqual(val1[property], val2[property])) {
					return false;
				}
			} else {
				return false;
			}
		}

		return true;
	} else if (val1 !== val2) {
		return false;
	} else {
		return true;
	}
}

var obj = {here: {is: "an"}, object: 2};

console.log(deepEqual(obj, obj)); // → true
console.log(deepEqual(obj, {here: 1, object: 2})); // → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2})); // → true

