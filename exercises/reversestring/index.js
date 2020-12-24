// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Solution #0
// function reverse(str) {
// 	// define a new empty array
// 	let newStr = [];
// 	let j = 0;
// 	oldStr = str.split("");
// 	// loop through the giving string's array
// 	for (let i = oldStr.length - 1; i >= 0; i--) {
// 		// set new string equal to the combination of the reverse giving string's elements
// 		newStr[j] = oldStr[i];
// 		j++;
// 	}
// 	// return the new string
// 	return newStr.join("");
// }

// Solution #1
// function reverse(str) {
// 	return str.split("").reverse().join("");
// }

// Solution #2
function reverse(str) {
	// create an empty string called "reversed"
	let reversed = "";
	// for each character in the provided string
	for (let character of str) {
		// take the character and add it to the start of "reversed"
		reversed = character + reversed;
	}
	// return the variable "reversed"
	return reversed;
}

// Solution #3
// function reverse(str) {
// 	return str.split("").reduce((rev, char) => char + rev, "");
// }

module.exports = reverse;
