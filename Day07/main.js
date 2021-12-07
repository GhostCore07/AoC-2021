import {input_data} from "./data.js"

let lines = input_data.split(",");
lines = lines.map(el => Number(el));
console.log(lines);

let min = 1000;
let max = 0;

for (let i = 0; i < lines.length; i++)
{
	if (lines[i] < min) min = lines[i];
	if (lines[i] > max) max = lines[i];
}


let mincost = 10000000;
for (let q = min; q <= max; q++)
{
	let cost = 0;
	for (let i = 0; i < lines.length; i++)
	{
		cost += Math.abs(lines[i] - q);
	}
	if (cost < mincost) mincost = cost;

}
console.log(mincost)

mincost = 1000000000000000000000;
for (let q = min; q <= max; q++)
{
	let cost = 0;
	for (let i = 0; i < lines.length; i++)
	{
		let inccost = 0;
		for (let k = 0; k <= Math.abs(lines[i] - q); k++)
		{
			cost += inccost;
			inccost++;
		}
	}
	if (cost < mincost) mincost = cost;

}
console.log(mincost)