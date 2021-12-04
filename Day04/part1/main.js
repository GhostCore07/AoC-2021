import {input_data0} from "./data.js"
import {input_data1} from "./data.js"


let numbers = input_data0.split(",").map(Number);
let cards = input_data1.split("\n\n");

for (let i = 0; i < cards.length; i++)
{
	cards[i] = cards[i].split("\n");
	for (let j = 0; j < cards[i].length; j++)
	{
		cards[i][j] = cards[i][j].split(" ").filter(el => el != "").map(Number)
	}
}

let lastnum = 0;
function checkNumbers ()
{
	for (let m = 0; m < numbers.length; m++)
	{
		for (let i = 0; i < cards.length; i++)
		{
			for (let j = 0; j < 5; j++)
			{
				for (let k = 0; k < 5; k++)
				{
					if (cards[i][j][k] === numbers[m]) 
					{
						cards[i][j][k] = "X";
						let result = checkBingo();
						if (result !== null)
						{
							lastnum = numbers[m];
							return result;

						}
					}
				}
			}
		}
	}
}

function checkBingo()
{
	for (let i = 0; i < cards.length; i++) // 100 cards
	{
		for (let j = 0; j < cards[0].length; j++) //5 rows
		{
			let checkColumns = 0;
			let checkRows = 0;

			for (let k = 0; k < 5; k++)
			{
				if (cards[i][k][j] == "X") checkColumns++;
			}
			for (let k = 0; k < 5; k++)
			{
				if (cards[i][j][k] == "X") checkRows++;
			}
			if (checkRows == 5) return cards[i];
			if (checkColumns == 5) return cards[i];
		}
	}
	return null;
}

let result = checkNumbers();
// console.log(result);

let acc = 0;
for (let i = 0; i < result.length; i++)
{
	for (let j = 0; j < result[0].length; j++)
	{
		if (result[i][j] !== "X") 
		{
			// console.log(result[i][j])
			acc += result[i][j];
		}
	}
}
console.log(acc * lastnum);
