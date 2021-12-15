import {input_data} from "./data.js"

let risk = input_data.split("\n");
let values = [...Array(100).keys()]

for (let i = 0; i < risk.length; i++)
{
	risk[i] = risk[i].split("").map(Number);
	values[i] = [...Array(100).keys()].map(_=>-1);
}
console.log(risk, values);

values[0][0] = 0;
checkPaths(0, 0)

function checkPaths(x, y)
{
	let cost = values[y][x]
	if (x > 0)
	{
		let oldCost = values[y][x - 1];
		let newCost = cost + risk[y][x - 1];
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
		let newCost = cost + risk[y - 1][x];
		if (
			// oldCost === -1 ||
			oldCost > newCost
		)
		{
			values[y - 1][x] = newCost;
			checkPaths(x, y - 1, newCost);
		}
	}
	if (x < 99)
	{
		let oldCost = values[y][x + 1];
		let newCost = cost + risk[y][x + 1];
		if (
			oldCost === -1 ||
			oldCost > newCost
		)
		{
			values[y][x + 1] = newCost;
			checkPaths(x + 1, y, newCost);
		}
	}
	if (y < 99)
	{
		let oldCost = values[y + 1][x];
		let newCost = cost + risk[y + 1][x];
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

console.log(values[99][99])