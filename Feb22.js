// This question was asked by Zillow.

// You are given a 2-d matrix where each cell represents number of coins in that cell. Assuming we start at matrix[0][0], and can only move right or down, find the maximum number of coins you can collect by the bottom right corner.

// For example, in this matrix

// 0 3 1 1
// 2 0 0 4
// 1 5 3 1
// The most we can collect is 0 + 2 + 1 + 5 + 3 + 1 = 12 coins.

const maxPathDownRight = function (matrix){
  // attempt at validating input, doesn't check to see if 
	if (matrix?.[0]?.[0] == undefined) {
    console.log('invalid input')
		console.log('must start with valid 2d matrix represented by arrays')
		return new Error
	}
	// we need to keep track of score as we navigate the matrix

	let tempScoresArray = []
	// Ways to go about navigating the matrix,
	// recursive function down/south right/east(cardinal directions are less likely to be misinterpreted ) for our moves that are passed a target cell and current number of coins, if the cell is null we terminate, otherwise we add the coins in the cell to the running tally and run the function on the adjacent cells. Add a check that we have reached the far corner of the array and push the value to tempScoresArray. Save calls by checking the target cells with if blocks
	// at end call tempScoresArray.sort(compareNumbers) and return the largest number at tempScoresArray[tempScoresArray.length-1]

	// OTHER SOLUTIONS ?
	// can we look for the index of the greatest value and make sure we run through it ? not guaranteed to be the greatest - N
	// create a binary tree ? would still use recursion but may have a way to reduce sheer number of calls.
	console.log(matrix)
	const moveEastSouth = function (cell, score) {
		// where cell is a array of coordinates with x at 0 and y at 1
		// when called on a cell that DNE, while at edge for example, terminate loop
		if (!Array.isArray(cell)) {
			console.log('not a cell')
			return // end - shouldn't happen because of the checks but just incase, if for instance the parent function is called without a matrix
		}
		let x = cell[0]
		let y = cell[1]
		// called on valid cell, add value to score
		score += matrix[x][y]
		// console.log( ' newScore is :', score, 'after adding',matrix[cell[0]][cell[1]])
		// if both next cells are empty we push the score onto the tempScoresArray

		if (!matrix?.[x + 1]?.[y] && !matrix?.[x]?.[y + 1]) {
			tempScoresArray.push(score)
			// console.log('got a score!', score)
		}
		// if we can move in the x(east) then do so
		if (matrix?.[x + 1]?.[y] != null) {
			// console.log('moving east! ', x, ' to ', x + 1, ' with ', score, ' coins')
			moveEastSouth([x + 1, y], score)
		}
		// if we can move in the y(south) then do so
		if (matrix?.[x]?.[y + 1] != null) {
			// console.log('moving south! ', y, ' to ', y + 1, ' with ', score, ' coins')
			moveEastSouth([x, y + 1], score)
		}
		// I have the feeling there is a better way of writing this, not so much in specific syntax but in structure as it seems the calls may interrupt each other, if we cared about that
	}
	// now with our recursion function written we want to run it to populate our temp scores array
	moveEastSouth([0, 0], 0)

	const compareNumbers = function (a, b) {
		return a - b
	} // if b is larger then it will be falsey since it will be 0 or negative, good for sorting numbers by value instead of by forcing to strings
	tempScoresArray.sort(compareNumbers)
	console.log('all paths done, the tallies are!', tempScoresArray)
	console.log(
		'and the highest score is:',
		tempScoresArray[tempScoresArray.length - 1]
	)
	return tempScoresArray[tempScoresArray.length - 1]
}

// Testing
let myMatrix = [ [ 0, 2, 1 ], [ 3, 0, 5 ], [ 1, 0, 3 ], [ 1, 4, 1 ] ]
maxPathDownRight( myMatrix ) // 12
let newMatrix = [0,2,1]
maxPathDownRight( newMatrix ) // invalid input
maxPathDownRight() // invalid input
