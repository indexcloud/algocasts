// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// Solution #0
function reverseInt(n) {
	// convert interger to string
	const reversedStr = n
		.toString()
		.split("")
		.reduce((rev, char) => (char === "-" ? "" : char) + rev, ""); // 0 will be obmitted by Number() automatically
	if (n < 0) {
		return Number(reversedStr) * -1;
	} else {
		return Number(reversedStr);
	}
}

// Solultion #1
// function reverseInt(n) {
// 	const reversed = n.toString().split("").reverse().join("");
// 	// if (n < 0) {
// 	// 	return parseInt(reversed) * -1; // parseInt() is going to stop when it reach before -, unlike Number()
// 	// }
// 	return parseInt(reversed) * Math.sign(n);
// }
// console.log(reverseInt(-98100));

module.exports = reverseInt;
