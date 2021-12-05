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

function line(x0, y0, x1, y1){

	let dx = x0 - x1;
	let dy = y0 - y1;

	let dx2 = (dx < 0 ? -dx : dx);
	let dy2 = (dy < 0 ? -dy : dy);
	let steps = (dx2 < dy2) ? dy2 : dx2;
	
	for (let i = 0; i <= steps; i++) {
		bitmap
		[((x0 + 0.5) - dx * i / steps) | 0]
		[((y0 + 0.5) - dy * i / steps) | 0]++;
		
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

	let minx = Math.min(lines[i][0][0], lines[i][1][0]);
 	let maxx = Math.max(lines[i][0][0], lines[i][1][0]);
 	let miny = Math.min(lines[i][0][1], lines[i][1][1]);
	let maxy = Math.max(lines[i][0][1], lines[i][1][1]);

	let x0 = lines[i][0][0];
	let x1 = lines[i][1][0];
	let y0 = lines[i][0][1];
	let y1 = lines[i][1][1];



	if (minx === maxx) //x0 == x1
	{
		for (let y = miny; y <= maxy; y++)
		{
			let x = minx;
			bitmap[x][y]++;
		}
	}
	else if (miny === maxy)
	{
		for (let x = minx; x <= maxx; x++)
		{
			let y = miny;
			bitmap[x][y]++;
		}		
	}
	// comment this out for part one
	else if (minx - maxx === miny - maxy)
	{
		line(x0, y0, x1, y1);
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
