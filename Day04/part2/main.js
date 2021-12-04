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

let wins = 0;
let lastnum = 0;
let result = null;
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
						if (result = checkBingo() !== null)
						{
							// let result = checkBingo();
							result = cards.splice(i, 1)
							lastnum = numbers[m];
							i--;
							if (cards.length === 0) return result;
							continue restart
						}
						
					}
				}
			}
		}
	}
}

let setflag = false;
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


let result2 = checkNumbers()[0];
// console.log(result2);

let acc = 0;
for (let i = 0; i < result2.length; i++)
{
	for (let j = 0; j < result2[0].length; j++)
	{
		if (result2[i][j] !== "X") 
		{
			// console.log(result2[i][j])
			acc += result2[i][j];
		}
	}
}
// console.log(lastnum)
console.log(acc * lastnum);