import {input_data} from "./data.js"
import {input_data2} from "./data.js"

let lines2 = input_data2;
lines2 = lines2.split("\n");
for (let i = 0; i < lines2.length; i++)
{
	lines2[i] = lines2[i].split("=")
	lines2[i][1] = Number(lines2[i][1])
}
// console.log(lines2);

let maxx = 0;
let maxy = 0;

let lines = input_data;
lines = lines.split("\n");
for (let i = 0; i < lines.length; i++)
{
	lines[i] = lines[i].split(",").map(Number)
	if (lines[i][1] > maxy) maxy = lines[i][1];
	if (lines[i][0] > maxx) maxx = lines[i][0];
}
// console.log(maxx, maxy);

let lines3 = []
for (let i = 0; i < lines.length; i++)
{
	if (lines3[lines[i][1]] === undefined){
		lines3[lines[i][1]] = [];
	}
	lines3[lines[i][1]][lines[i][0]] = "#"
}

for (let y = 0; y <= maxy+1; y++)
{
	if (lines3[y] === undefined){
		lines3[y] = [];
	}
	for (let x = 0; x <= maxx+1; x++)
	{
		if (lines3[y][x] !== "#"){
			lines3[y][x] = ".";
		}
	}
}

// console.log(lines3);

for (let i = 0; i < lines2.length; i++)
{
	let foldNum = lines2[i][1];
	if(lines2[i][0] === "x")
	{
		for (let y = 0; y <= maxy; y++)
		{
			let xCounter = 0;
			for (let x = foldNum; x <= maxx; x++)
			{
				xCounter++;
				if (lines3[y][x+1] === "#"){
					lines3[y][foldNum-xCounter] = "#";
					lines3[y][x+1] = "."
				}
			}
		}
	}
	else
	{
		for (let x = 0; x <= maxx; x++)
		{
			let yCounter = 0;
			for (let y = foldNum; y <= maxy; y++)
			{
				yCounter++;
				// console.log(y+1)
				if (lines3[y+1][x] === "#"){
					lines3[foldNum-yCounter][x] = "#";
					lines3[y+1][x] = "."
				}
			}
		}
	}

	if (i === 0)
	{
		let count = 0;
		for (let y = 0; y <= maxy; y++)
		{
			for (let x = 0; x <= maxx; x++)
			{
				if (lines3[y][x] === "#"){
					count++;
				}
			}
		}
		console.log(count);
	}
}

let count = 0;
for (let y = 0; y <= maxy; y++)
{
	let string = lines3[y].join("").substring(0, 40);
	console.log(string)
}
