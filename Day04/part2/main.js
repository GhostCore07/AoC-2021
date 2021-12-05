import {input_data0} from "./data.js"
import {input_data1} from "./data.js"

let numbers = input_data0.split(",").map(Number);
let cards = input_data1.split("\n\n");

for (let i = 0; i < cards.length; i++)
{
	cards[i] = cards[i].split("\n");
	for (let j = 0; j < cards[i].length; j++)
	{
		cards[i][j] = cards[i][j].split(" ").filter(el => el !== "").map(Number);
	}
}

let lastnum = 0;
function checkNumbers ()
{
	for (let m = 0; m < numbers.length; m++)
	{
		restart:
		for (let i = 0; i < cards.length; i++)
		{
			for (let j = 0; j < 5; j++)
			{
				for (let k = 0; k < 5; k++)
				{
					if (cards[i][j][k] === numbers[m]) 
					{
						cards[i][j][k] = "X";
						if (checkBingo() !== null)
						{
							const result = cards.splice(i, 1)[0];
							lastnum = numbers[m];
							i--;
							if (cards.length === 0) return result;
							continue restart;
						}
						
					}
				}
			}
		}
	}
}

function checkBingo()
{
	for (let i = 0; i < cards.length; i++)
	{
		for (let j = 0; j < 5; j++)
		{
			let checkColumns = 0;
			let checkRows = 0;

			for (let k = 0; k < 5; k++)
			{
				if (cards[i][k][j] === "X") checkColumns++;
			}
			for (let k = 0; k < 5; k++)
			{
				if (cards[i][j][k] === "X") checkRows++;
			}
			if (checkRows === 5 || checkColumns === 5) return cards[i];
		}
	}
	return null;
}

let result2 = checkNumbers();
let acc = 0;
for (let i = 0; i < result2.length; i++)
{
	for (let j = 0; j < result2[0].length; j++)
	{
		if (result2[i][j] !== "X") 
		{
			acc += result2[i][j];
		}
	}
}
console.log(acc * lastnum); //8468

// For each number in bingo board, replace it with the index of that number in the called-out number array you get at the start. A lower index iimplies that number is called early and a higher implies it's called late.
// For each bingo board, get it's columns and rows. For each of those, find the maximum number in that column/row. This is the winning turn for that column/row. Then, find the minimum number of the winning turns. This is the winning turn for the bingo.
// Then, simply find the bingo that has the lowest winning turn. Find the numbers that were called-out until that turn and do the needful.