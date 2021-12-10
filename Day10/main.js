import {input_data} from "./data.js"
let lines = input_data;
lines = lines.split("\n");
// console.log(lines)

const opens = ["(", "[", "{", "<"];
const closeds = [")", "]", "}", ">"];
const openStack = [];
const errorStack = [];

const keepLines = [];
let scores = [];

for (let y = 0; y < lines.length; y++)
{
	openStack.length = 0;
	let corrupted = false;

	for (let x = 0; x < lines[y].length; x++)
	{
		const currChar = lines[y][x]
		const startIndex = opens.indexOf(currChar);
		const endIndex = closeds.indexOf(currChar);

		if (startIndex !== -1) {
			openStack.push(currChar);
		}
		else if (endIndex !== -1){
			const opener = opens[endIndex];
			if (openStack[openStack.length - 1] === opener)
			{
				openStack.pop();
			}
			else
			{
				errorStack.push(currChar);
				corrupted = true;
				break;
			}
		}
	}

	if (corrupted === false)
	{
		keepLines.push(lines[y]);

		let currentScore = 0;
		for (let i = openStack.length - 1; i >= 0; i--)
		{
			if (openStack[i] === "(") currentScore = currentScore * 5 + 1;
			if (openStack[i] === "[") currentScore = currentScore * 5 + 2;
			if (openStack[i] === "{") currentScore = currentScore * 5 + 3;
			if (openStack[i] === "<") currentScore = currentScore * 5 + 4;
		}
		scores.push(currentScore);
	}
	
}

scores.sort((a, b) => b - a);
console.log(scores[(scores.length - 1) / 2]);

// console.log(keepLines);

let score = 0;
for (let i = 0; i < errorStack.length; i++)
{
	if(errorStack[i] === ")") score += 3;
	else if(errorStack[i] === "]") score += 57;
	else if(errorStack[i] === "}") score += 1197;
	else if(errorStack[i] === ">") score += 25137;

}

console.log(errorStack)
console.log(score);
