// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
	// Create empty array of arrays called "result"
	// Create a counter variable, starting at 1
	// As long as (start column <= end column) and (start row <= end row)
	//// Loop from start column to end column
	////// At results[start_row][i] assign counter variable
	////// Increment counter
	//// Increment start row
	//// Loop from start row to end row
	////// At results[i][end_column] assign counter variable
	////// Increment counter
	//// Decrement end column
	//// Loop from end column to start column
	////// At results[end_row][i] assign counter variable
	////// Increment counter
	//// Decrement end row
	//// Loop from end row to start row
	////// At results[i][start_column] assign counter variable
	////// Increment counter
	//// Increment start column
	// Return results
	const results = [];

	for (let i = 0; i < n; i++) {
		results.push([]);
	}

	let counter = 1;
	let startCol = 0;
	let endCol = n - 1;
	let startRow = 0;
	let endRow = n - 1;

	while (startCol <= endCol && startRow <= endRow) {
		for (let i = startCol; i <= endCol; i++) {
			results[startCol][i] = counter;
			counter++;
		}
		startRow++;

		for (let i = startRow; i <= endRow; i++) {
			results[i][endCol] = counter;
			counter++;
		}
		endCol--;

		for (let i = endCol; i >= startCol; i--) {
			results[endRow][i] = counter;
			counter++;
		}
		endRow--;

		for (let i = endRow; i >= startRow; i--) {
			results[i][startCol] = counter;
			counter++;
		}
		startCol++;
	}

	return results;
}

console.log(matrix(5));

module.exports = matrix;
