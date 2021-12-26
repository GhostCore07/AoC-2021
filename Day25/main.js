import {input_data} from "./data.js"

// let input_data = `v...>>.vv>
// .vv>>.vv..
// >>.>v>...v
// >>v>>.>.v.
// v>v.vv.v..
// >.>>..v...
// .vv..>.>v.
// v.v..>>v.v
// ....v..v.>`;

// let w = 10;
// let h = 9;
let w = 139;
let h = 137;


let lines = input_data.split("\n");

let copy = Array(h)
let copy2 = Array(h)
for (let i = 0; i < lines.length; i++)
{
	lines[i] = lines[i].split("")
	copy[i] = Array.from(lines[i])
	copy2[i] = Array.from(lines[i])
}
console.log(lines, copy);

let modified = true;
let count = 0;

// for (let i = 0; i < lines.length; i++)
// {
// 	console.log(copy2[i].join(""))
// }

while (modified)
{
	count++

	for (let i = 0; i < lines.length; i++)
	{
		copy[i] = copy[i].map(el=>".")
	}


	for (let y = 0; y < lines.length; y++)
	{
		for (let x = 0; x < lines[y].length; x++)
		{
			if (lines[y][x] === "v")
			{
				copy[y][x] = "v"
			}
				
		}
	}

	for (let y = 0; y < lines.length; y++)
	{
		for (let x = 0; x < lines[y].length; x++)
		{
			if (lines[y][x] === ">")
			{
				let x2 = (x + 1) % w

				if (lines[y][x2] === ".")
				{
					copy[y][x2] = ">"
				}
				else
				{
					copy[y][x] = ">"
				}
			}
		}
	}

	for (let i = 0; i < lines.length; i++)
	{
		lines[i] = Array.from(copy[i]);
		copy[i] = copy[i].map(el=>".")
	}

	for (let y = 0; y < lines.length; y++)
	{
		for (let x = 0; x < lines[y].length; x++)
		{
			if (lines[y][x] === ">")
			{
				copy[y][x] = ">"
			}
				
		}
	}

	for (let y = 0; y < lines.length; y++)
	{
		for (let x = 0; x < lines[y].length; x++)
		{
			if (lines[y][x] === "v")
			{
				let y2 = (y + 1) % h;

				if (lines[y2][x] === ".")
				{
					copy[y2][x] = "v"
				}
				else
				{
					copy[y][x] = "v"
				}
			}
		}
	}

	modified = false;

	check:
	for (let y = 0; y < lines.length; y++)
	{
		for (let x = 0; x < lines[y].length; x++)
		{
			if (copy[y][x] !== copy2[y][x])
			{
				modified = true;
				break check;
			}
		}
	}

	for (let i = 0; i < lines.length; i++)
	{
		lines[i] = Array.from(copy[i]);
		copy2[i] = Array.from(copy[i])
	}

	// for (let i = 0; i < lines.length; i++)
	// {
	// 	console.log(copy[i].join(""))
	// }


	if (count > 1000000) break;
}

console.log(count)


//3765
//101
//102