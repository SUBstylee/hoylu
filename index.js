/**
 * B-I-N-G-O
 *
 * A Bingo card contain 25 squares arranged in a 5x5 grid (five columns
 * and five rows). Each space in the grid contains a number between 1
 * and 75. The center space is marked "FREE" and is automatically filled.
 *
 * As the game is played, numbers are drawn. If the player's card has
 * that number, that space on the grid is filled.
 *
 * A player wins BINGO by completing a row, column, or diagonal of filled
 * spaces.
 *
 * Your job is to complete the function that takes a bingo card and array
 * of drawn numbers and return 'true' if that card has achieved a win.
 *
 * A bingo card will be 25 element array. With the string 'FREE' as the
 * center element (index 12). Although developers are unscrupulous, they
 * will pass valid data to your function.
 */

function checkForBingo(bingoCard, drawnNumbers) {
	// declare an object to use as a hashmap to hold drawn numbers
	// ******* this will bring the final space complexity of the function to 'O(n)'
	let drawnMap = {};

	// loop through the drawn numbers to place them into the hashmap to check against
	// ******* this will bring the final time complexity of the funtion to 'O(n)'
	for (let i = 0; i < drawnNumbers.length; i++) {
		drawnMap[drawnNumbers[i]] = i;
	}

	// declared these variables so they are easier to deal with in the if statements
	const a = drawnMap;
	const b = bingoCard;

	// the following if statements check for all possible bingo combinations
	// note that they could have been combined, but I separated them here to make it a little easier to see what does what

	// checks for bingo in horizontal rows
	if (
		(b[0] in a && b[1] in a && b[2] in a && b[3] in a && b[4] in a) ||
		(b[5] in a && b[6] in a && b[7] in a && b[8] in a && b[9] in a) ||
		(b[10] in a && b[11] in a && b[13] in a && b[14] in a) ||
		(b[15] in a && b[16] in a && b[17] in a && b[18] in a && b[19] in a) ||
		(b[20] in a && b[21] in a && b[22] in a && b[23] in a && b[24] in a)
	) {
		console.log('horizontal');
		return true;
	}

	//checks for bingo in vertical rows
	if (
		(b[0] in a && b[5] in a && b[10] in a && b[15] in a && b[20] in a) ||
		(b[1] in a && b[6] in a && b[11] in a && b[16] in a && b[21] in a) ||
		(b[2] in a && b[7] in a && b[17] in a && b[22] in a) ||
		(b[3] in a && b[8] in a && b[13] in a && b[18] in a && b[23] in a) ||
		(b[4] in a && b[9] in a && b[14] in a && b[19] in a && b[24] in a)
	) {
		console.log('vertical');
		return true;
	}

	//checks for bingo diagonally
	if (
		(b[0] in a && b[6] in a && b[18] in a && b[24] in a) ||
		(b[4] in a && b[8] in a && b[16] in a && b[20] in a)
	) {
		console.log('diagonal');
		return true;
	}

	console.log('no matches');
	return false;
}

module.exports = checkForBingo;

// here are some samples

// this should return true with diagonal + free
checkForBingo(
	[
		8,
		29,
		35,
		54,
		65,
		13,
		24,
		44,
		48,
		67,
		9,
		21,
		'FREE',
		59,
		63,
		7,
		19,
		34,
		53,
		61,
		1,
		20,
		33,
		46,
		72,
	],
	[8, 24, 53, 72],
);

// this should return true for horizontal
checkForBingo(
	[
		8,
		29,
		35,
		54,
		65,
		13,
		24,
		44,
		48,
		67,
		9,
		21,
		'FREE',
		59,
		63,
		7,
		19,
		34,
		53,
		61,
		1,
		20,
		33,
		46,
		72,
	],
	[8, 29, 35, 54, 65],
);

// this should return true for vertical
checkForBingo(
	[
		8,
		29,
		35,
		54,
		65,
		13,
		24,
		44,
		48,
		67,
		9,
		21,
		'FREE',
		59,
		63,
		7,
		19,
		34,
		53,
		61,
		1,
		20,
		33,
		46,
		72,
	],
	[8, 13, 9, 7, 1],
);

// this should return false
checkForBingo(
	[
		8,
		29,
		35,
		54,
		65,
		13,
		24,
		44,
		48,
		67,
		9,
		21,
		'FREE',
		59,
		63,
		7,
		19,
		34,
		53,
		61,
		1,
		20,
		33,
		46,
		72,
	],
	[1, 33, 53, 65, 29, 75],
);
