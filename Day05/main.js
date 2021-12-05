import {input_data} from "./data.js"

let lines = input_data.split("\n");
for (let i = 0; i < lines.length; i++)
{
	lines[i] = lines[i].split(" -> ");
	for (let j = 0; j < lines[i].length; j++)
	{
		lines[i][j] = lines[i][j].split(",").map(Number);
	}
}

let bitmap = [];

for (let x = 0; x < 1000; x++)
{
	bitmap.push([]);
	for (let y = 0; y < 1000; y++)
	{
		bitmap[x].push(0)
	}
}

for (let i = 0; i < lines.length; i++)
{
	const x0 = lines[i][0][0];
	const x1 = lines[i][1][0];
	const y0 = lines[i][0][1];
	const y1 = lines[i][1][1];
	const minx = Math.min(x0, x1);
 	const maxx = Math.max(x0, x1);
 	const miny = Math.min(y0, y1);
	const maxy = Math.max(y0, y1);

	if (minx === maxx)
	{
		for (let y = miny; y <= maxy; y++)
		{
			const x = minx;
			bitmap[x][y]++;
		}
	}
	else if (miny === maxy)
	{
		for (let x = minx; x <= maxx; x++)
		{
			const y = miny;
			bitmap[x][y]++;
		}		
	}
	// comment this out for part one
	else if (maxx - minx === maxy - miny)
	{
		const dx = (x1 - x0) / (maxx - minx)
		const dy = (y1 - y0) / (maxy - miny)
		for (let p = 0; p <= maxx-minx; p++)
		{
			bitmap[x0 + p*dx][y0 + p*dy]++;
		}
	}
}

let count = 0;
for (let x = 0; x < 1000; x++)
{
	for (let y = 0; y < 1000; y++)
	{
		if (bitmap[x][y] > 1) count++;
	}
}

console.log(count);
