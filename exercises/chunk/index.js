// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// Solution #0
// function chunk(array, size) {
// 	// traverse the provided array
// 	let mainArray = [];
// 	// create a new array that will contain all the subarrays
// 	// if size is greater than provided array's lengh, there will be only one subarray
// 	if (array.length <= size) {
// 		return mainArray.push(array);
// 	}
// 	for (let i = 0; i < array.length / size; i + size) {
// 		let subArray = [];
// 		for (let j = 0; j < size; j++) {
// 			subArray.push(array[i + j]);
// 		}
// 		mainArray.push(subArray);
// 	}
// 	return mainArray;

// 	// using a for loop to create subarray with the length of size
// }

// Solution #1
// function chunk(array, size) {
// 	// create empty array to hold chunks caled 'chunked'
// 	const chunked = [];
// 	// for each element in the "unchunked" array
// 	for (let element of array) {
// 		// retrieve the last element in "chunked"
// 		const last = chunked[chunked.length - 1];
// 		// if last element does not exist, or if it's length is equal to chunk size
// 		if (!last || last.length === size) {
// 			// push a new chunk into "chunked" with the current element
// 			chunked.push([element]);
// 		} else {
// 			// else add the current element into the chunk
// 			last.push(element);
// 		}
// 	}
// 	return chunked;
// }

// Solution #2
function chunk(array, size) {
	// Create empty 'chunked' array
	const chunked = [];
	// Create 'index' start at 0
	let index = 0;
	//  While index is less than array.length
	while (index < array.length) {
		// Push a slice of length 'size' from 'array' into 'chunked'
		chunked.push(array.slice(index, index + size));
		// Add 'size' to 'index'
		index = index + size;
	}
	return chunked;
}

// console.log(chunk([1, 2, 3, 4, 5], 10));
module.exports = chunk;
