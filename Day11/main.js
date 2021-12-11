import {input_data} from "./data.js"

let lines = input_data;

lines = lines.split("\n");

for (let i = 0; i < lines.length; i++)
{
	lines[i] = lines[i].split("").map(Number)
}

let hasFlashed = [];
for (let y = 0; y < lines.length; y++)
{
	hasFlashed[y] = [];
	for (let x = 0; x < lines[y].length; x++)
	{
		hasFlashed[y][x] = 0;
	}
}

let flashes = 0;
let flashcount = 0;
let sync;
while(true)
{
	for (let y = 0; y < lines.length; y++)
	{
		for (let x = 0; x < lines[y].length; x++)
		{
			lines[y][x]++;
		}
	}
	let anyflash;
	redo:
	do {
		anyflash = false;
		for (let y = 0; y < lines.length; y++)
		{
			for (let x = 0; x < lines[y].length; x++)
			{
				if (lines[y][x] > 9 && hasFlashed[y][x] === 0)
				{
					anyflash = true;
					hasFlashed[y][x] = 1;
					flashes++;
					
					incrementAdjacent(x, y+1);
					incrementAdjacent(x+1, y+1);
					incrementAdjacent(x+1, y);
					incrementAdjacent(x+1, y-1);
					incrementAdjacent(x, y-1);
					incrementAdjacent(x-1, y-1);
					incrementAdjacent(x-1, y);
					incrementAdjacent(x-1, y+1);
					continue redo;
				}
			}
		}
	} while (anyflash === true)

	for (let y = 0; y < lines.length; y++)
	{
		for (let x = 0; x < lines[y].length; x++)
		{
			hasFlashed[y][x] = 0;
			if (lines[y][x] > 9)
			{
				lines[y][x]	= 0;
			}
		}
	}

	sync = true;
	for (let y = 0; y < lines.length; y++)
	{
		for (let x = 0; x < lines[y].length; x++)
		{
			if (lines[y][x] !== 0) sync = false;
		}
	}
	flashcount++;
	if (flashcount === 100)
	{
		console.log(flashes);
	}
	if (sync) break;
}

function incrementAdjacent(x, y)
{
	if (x < 0 || x > 9 || y < 0 || y > 9) return;
	lines[y][x]++;
}

console.log(flashcount);
