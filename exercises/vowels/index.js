// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// Solution #1
// function vowels(str) {
// 	let counter = 0;

// 	const checker = ["a", "e", "i", "o", "u"];

// 	for (let character of str.toLowerCase()) {
// 		// if (character === "a" || character === "e" || character === "i" || character === "o" || character === "u") {
// 		// 	counter++;
// 		// }
// 		if (checker.includes(character)) {
// 			counter++;
// 		}
// 	}

// 	return counter;
// }

// Solultion #2
function vowels(str) {
	const matches = str.match(/[aeiou]/gi);
	return matches ? matches.length : 0;
}

module.exports = vowels;
