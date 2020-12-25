// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// Solution #0
// function maxChar(str) {
// 	// create an empty object
// 	const obj = {};
// 	// convert string to object and count all the characters in the string
// 	for (let char of str) {
// 		if (!obj[char]) {
// 			obj[char] = 1;
// 		} else {
// 			obj[char] += 1;
// 		}
// 	}

// 	// define some helper variable
// 	let max = 0;
// 	let maxKey = "";

// 	// return the object value that is the highest
// 	for (let key in obj) {
// 		if (obj[key] > max) {
// 			max = obj[key];
// 			maxKey = key;
// 		}
// 	}
// 	return maxKey;
// }

// Solution #1
function maxChar(str) {
	const charMap = {};
	let max = 0;
	let maxChar = "";

	for (let char of str) {
		if (charMap[char]) {
			charMap[char] += 1;
		} else {
			charMap[char] = 1;
		}
	}

	for (let char in charMap) {
		if (charMap[char] > max) {
			max = charMap[char];
			maxChar = char;
		}
	}
	return maxChar;
}

// console.log(maxChar("apple 1231111"));
module.exports = maxChar;
