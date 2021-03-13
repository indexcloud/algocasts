// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// Solution #1
// function pyramid(n) {
// 	// For rows Loop from 1 to n

// 	// Create an empty string call stair

// 	// For column loop from 1 to ? n + n -1

// 	// add n - row - 1 space to the left and add n - row - 1 space to the right, until n - 1 = 0

// 	// if certain condition, push "#" to stair

// 	// else push space to stair

// 	// Console log stair
// 	for (let row = 0; row < n; row++) {
// 		let stair = "";

// 		for (let column = 0; column < 2 * n - 1; column++) {
// 			if (column < n - row - 1 || column >= n + row) {
// 				stair += " ";
// 			} else {
// 				stair += "#";
// 			}
// 		}

// 		console.log(stair);
// 	}
// }

// Solution #2 Recursion
// function pyramid(n, row = 0, stair = "") {
// 	if (n === row) {
// 		return;
// 	}

// 	if (2 * n - 1 === stair.length) {
// 		console.log(stair);
// 		return pyramid(n, row + 1, (stair = ""));
// 	}

// 	if (stair.length < n - row - 1 || stair.length >= n + row) {
// 		stair += " ";
// 	} else {
// 		stair += "#";
// 	}

// 	pyramid(n, row, stair);
// }

// Solution #3
// function pyramid(n) {
// 	const midpoint = Math.floor((2 * n - 1) / 2);

// 	for (let row = 0; row < n; row++) {
// 		let level = "";

// 		for (let column = 0; column < 2 * n - 1; column++) {
// 			if (midpoint - row <= column && midpoint + row >= column) {
// 				level += "#";
// 			} else {
// 				level += " ";
// 			}
// 		}

// 		console.log(level);
// 	}
// }

// Solution #4
function pyramid(n, row = 0, level = "") {
	if (n === row) {
		return;
	}

	if (2 * n - 1 === level.length) {
		console.log(level);
		return pyramid(n, row + 1, (level = ""));
	}

	const midpoint = Math.floor((2 * n - 1) / 2);
	let add;

	if (midpoint - row <= level.length && midpoint + row >= level.length) {
		add = "#";
	} else {
		add = " ";
	}

	pyramid(n, row, level + add);
}

module.exports = pyramid;
