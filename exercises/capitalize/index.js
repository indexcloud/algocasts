// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// Solution #1
// function capitalize(str) {
// 	// assume each word is separte by space so we split string by space
// 	const arr = str.split(" ");

// 	// using a for loop to capitalize the first letter of each word
// 	for (let i = 0; i < arr.length; i++) {
// 		const subArr = arr[i].split("");

// 		const capLetter = subArr[0].toUpperCase();

// 		subArr.splice(0, 1, capLetter);

// 		arr.splice(i, 1, subArr.join(""));
// 	}

// 	// combine words together with space between
// 	return arr.join(" ");
// }

// Solution #2
// function capitalize(str) {
// 	// Make an empty array "words"
// 	const words = [];
// 	// Split the input string by spaces to get an array
// 	// For each word in the array
// 	// Uppercase the first letter of the word
// 	// Join first letter with the rest of the string
// 	// Push result into "words" array
// 	// Join "words" into a string and return it
// 	for (let word of str.split(" ")) {
// 		words.push(word[0].toUpperCase() + word.slice(1));
// 	}

// 	return words.join(" ");
// }

// Solution #3
function capitalize(str) {
	// Create "result" which is the first character of the input string capitalized
	let result = str[0].toUpperCase();
	// For each character in the string
	for (let i = 1; i < str.length; i++) {
		// If the character to the left a space
		if (str[i - 1] === " ") {
			// Capitalize it and add it to "result"
			result += str[i].toUpperCase();
			// Else
		} else {
			// Add it to "result"
			result += str[i];
		}
	}

	return result;
}

module.exports = capitalize;
