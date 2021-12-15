import {input_data} from "./data.js"

let risk = input_data.split("\n");

let values = [...Array(100 * 5).keys()]
for (let i = 0; i < values.length; i++)
{
	values[i] = [...Array(100 * 5).keys()].map(_=>-1);
}

let risk3 = [];
for (let i = 0; i < risk.length; i++)
{
	let riskLine = risk[i].split("").map(Number)
	for (let y = 0; y < 5; y++)
	{
		let newRisk = [];
		for (let x = 0; x < 5; x++)
		{
			newRisk = newRisk.concat(riskLine.map(el => ((el + x + y - 1) % 9) + 1));
		}
		risk3[i + 100*y] = newRisk;
	}	
}

console.log(risk3, values);

values[0][0] = 0;
checkPaths(0, 0)

function checkPaths(x, y)
{
	let cost = values[y][x]
	if (x > 0)
	{
		let oldCost = values[y][x - 1];
		let newCost = cost + risk3[y][x - 1];
		if (
			// oldCost === -1 ||
			oldCost > newCost
		)
		{
			values[y][x - 1] = newCost;
			checkPaths(x - 1, y, newCost);
		}
	}
	if (y > 0)
	{
		let oldCost = values[y - 1][x];
		let newCost = cost + risk3[y - 1][x];
		if (
			// oldCost === -1 ||
			oldCost > newCost
		)
		{
			values[y - 1][x] = newCost;
			checkPaths(x, y - 1, newCost);
		}
	}
	if (x < 499)
	{
		let oldCost = values[y][x + 1];
		let newCost = cost + risk3[y][x + 1];
		if (
			oldCost === -1 ||
			oldCost > newCost
		)
		{
			values[y][x + 1] = newCost;
			checkPaths(x + 1, y, newCost);
		}
	}
	if (y < 499)
	{
		let oldCost = values[y + 1][x];
		let newCost = cost + risk3[y + 1][x];
		if (
			oldCost === -1 ||
			oldCost > newCost
		)
		{
			values[y + 1][x] = newCost;
			checkPaths(x, y + 1, newCost);
		}
	}

}

console.log(values[499][499])