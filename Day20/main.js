import {iea} from "./data.js" //512
import {input_image} from "./data.js" //100x100

let lines = input_image.split("\n");

for (let i = 0; i < lines.length; i++)
{
	lines[i] = lines[i].split("")
}
console.log(lines);

let inf = false;

function enhance(input)
{
	let result = [];
	for (let y = -2; y < input.length + 2; y++)
	{
		let line = [];
		result.push(line);
		for (let x = -2; x < input[0].length + 2; x++)
		{
			let shift = 9;
			let num = 0;
			for (let y2 = y-1; y2 <= y+1; y2++)
			{
				if (y2 < 0 || y2 > input.length - 1) {
					if(!inf)
					{
						shift -= 3;
						continue;
					}
					else
					{
						shift--;
						num = num | (1 << shift);
						shift--;
						num = num | (1 << shift);
						shift--;
						num = num | (1 << shift);
						continue;
					}
				}
				for (let x2 = x-1; x2 <= x+1; x2++)
				{
					shift--;
					if (x2 < 0 || x2 > input[0].length - 1) {
						if (inf)
						{
							num = num | (1 << shift);
						}
						continue;
					}
					if (input[y2][x2] === "#")
					{
						num = num | (1 << shift);
					}
				}
			}
			line.push(iea[num]);
		}
	}
	inf = !inf;
	return result;
}


let result = enhance(lines);
for (let i = 0; i < 49; i++)
{
	result = enhance(result);
}
console.log(count(result));

function count(input)
{
	let c = 0;
	for (let i = 0; i < input.length; i++)
	{
		for (let j = 0; j < input[0].length; j++)
		{
			if(input[i][j] === "#")
			{
				c++;
			}
		}
	}
	return c;
}

function print(input)
{
	for (let i = 0; i < input.length; i++)
	{
		console.log(input[i].join(" "));
	}
}