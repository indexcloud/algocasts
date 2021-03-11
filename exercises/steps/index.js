// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// Solution #1
// function steps(n) {
// 	// set a variabe with single #, and single space
// 	const level = "#";
// 	const space = " ";

// 	const levelArr = [];
// 	const spaceArr = [];

// 	for (let i = 0; i < n; i++) {
// 		spaceArr.push(space);
// 	}

// 	// console.log n times
// 	for (let i = 0; i < n; i++) {
// 		levelArr.push(level);
// 		spaceArr.pop(space);
// 		console.log(`"${levelArr.join("") + spaceArr.join("")}"`);
// 	}
// 	// add # each increment
// }

// steps(3);

// Solution #2
// function steps(n) {
// 	// From 0 to n (iterate through rows)
// 	//// Create an empty stirng, "stair"
// 	//// From 0 to n (iterate through columns)
// 	////// If the current column is equal to or less than the current row
// 	//////// Add a "#" to "stair"
// 	////// Else
// 	//////// Add a space to "stair"
// 	//// Console log "stair"
// 	for (let row = 0; row < n; row++) {
// 		let stair = "";

// 		for (let column = 0; column < n; column++) {
// 			if (column <= row) {
// 				stair += "#";
// 			} else {
// 				stair += " ";
// 			}
// 		}

// 		console.log(stair);
// 	}
// }

// Solution #3
function steps(n, row = 0, stair = "") {
	if (n === row) {
		return;
	}

	if (n === stair.length) {
		console.log(stair);
		return steps(n, row + 1);
	}

	if (stair.length <= row) {
		stair += "#";
	} else {
		stair += " ";
	}
	steps(n, row, stair);
}

module.exports = steps;
