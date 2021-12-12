import {input_data} from "./data.js"

let lines = input_data;
lines = lines.split("\n");

for (let i = 0; i < lines.length; i++)
{
	lines[i] = lines[i].split("").map(Number);
}

let part1 = 0;
for (let y = 0; y < 100; y++)
{
	for (let x = 0; x < 100; x++ )
	{
		if (checkLow(x, y)) part1 += lines[y][x] + 1;
	}
}
console.log(part1)

for (let y = 0; y < 100; y++)
{
	for (let x = 0; x < 100; x++ )
	{
		const current = lines[y][x]
		if (current !== 9) lines[y][x] = 0;
		if (current === 9) lines[y][x] = -1;
	}
}
const results = [];
for (let y = 0; y < 100; y++)
{
	for (let x = 0; x < 100; x++ )
	{
		const current = lines[y][x]
		if (current === 0)
		{
			const count = computeBasin(x, y, 0);
			results.push(count);
		}

	}
}

function computeBasin(x, y, prev)
{
	let count = prev + 1;

	lines[y][x] = count;

	if (y > 0)
	{
		if (lines[y-1][x] === 0) 
		{
			count = computeBasin(x, y-1, count)
		}
	}
	if (x > 0)
	{
		if (lines[y][x-1] === 0) 
		{
			count = computeBasin(x-1, y, count)
		}
	}
	if (y < 99)
	{
		if (lines[y+1][x] === 0)
		{
			count = computeBasin(x, y+1, count)
		}
	}
	if (x < 99)
	{
		if (lines[y][x+1] === 0)
		{
			count = computeBasin(x+1, y, count)
		}
	}
	return count;
}

function checkLow(x, y)
{
	let count = 0;
	let maxcount = 0;

	let value = lines[y][x];

	if (y > 0)
	{
		if (lines[y-1][x] > value) 
		{
			count++;
		}
		maxcount++;
	}
	if (x > 0)
	{
		if (lines[y][x-1] > value) 
		{
			count++;
		}
		maxcount++;
	}
	if (y < 99)
	{
		if (lines[y+1][x] > value)
		{
			count++;
		}
		maxcount++;
	}
	if (x < 99)
	{
		if (lines[y][x+1] > value)
		{
			count++;
		}
		maxcount++;
	}
	if (count === maxcount) return true;
	return false;
}

results.sort((a, b) => b - a)
console.log(results[0] * results[1] * results[2]);