// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// Solution #0
// function palindrome(str) {
// 	// change provided string to an array by split
// 	// use reduce method to get the reversed string by adding each element of the new array
// 	const reversed = str.split("").reduce((rev, char) => char + rev, "");
// 	// compare the reversed string to the provided string
// 	// if equal return true, else return false
// 	return reversed === str ? true : false;
// }

// Solution #1
// function palindrome(str) {
// 	const reversed = str.split("").reverse().join("");
// 	return str === reversed;
// }

// Solution #2
function palindrome(str) {
	return str.split("").every((char, i) => {
		return char === str[str.length - i - 1];
	});
}

module.exports = palindrome;
