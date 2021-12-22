import {input_data} from "./data.js"

let lines = input_data.split("\n");

let nums = [];
let state = [];

for (let i = 0; i < 20; i++)
{
	lines[i] = lines[i].split(" ")
	lines[i][1] = lines[i][1].split(",")
	lines[i][1][0] = lines[i][1][0].split("=")
	lines[i][1][1] = lines[i][1][1].split("=")
	lines[i][1][2] = lines[i][1][2].split("=")
	lines[i][1][0][1] = lines[i][1][0][1].split("..").map(Number)
	lines[i][1][1][1] = lines[i][1][1][1].split("..").map(Number)
	lines[i][1][2][1] = lines[i][1][2][1].split("..").map(Number)
	if (lines[i][0] === "on")
	{
		lines[i][0] = 1;
	}
	else
	{
		lines[i][0] = 0;
	}
	state.push(lines[i][0])
	nums.push([...lines[i][1][0][1], ...lines[i][1][1][1], ...lines[i][1][2][1]])
}
console.log(lines, nums, state);

function getIndex(x, y, z)
{	
	let w = 101;
	let h = 101;
	x += 50;
	y += 50;
	z += 50;
	return x + y * w + z * h * w
}

let cubes = [];
for (let x = -50; x <= 50; x++)
{
	for (let y = -50; y <= 50; y++)
	{
		for (let z = -50; z <= 50; z++)
		{
			let index = getIndex(x, y, z)
			cubes[index] = 0;
		}
	}
}


console.log(cubes)


for (let i = 0; i < 20; i++)
{
	let x0 = nums[i][0]
	let x1 = nums[i][1]
	let y0 = nums[i][2]
	let y1 = nums[i][3]
	let z0 = nums[i][4]
	let z1 = nums[i][5]

	for (let x = x0; x <= x1; x++)
	{
		for (let y = y0; y <= y1; y++)
		{
			for (let z = z0; z <= z1; z++)
			{
				let index = getIndex(x, y, z)
				cubes[index] = state[i];
			}
		}
	}
}

console.log(cubes.reduce((a, b) => a + b))

// for (let y = 0; y < lines.length; y++)
// {
// 	for (let x = 0; x < lines[y].length; x++)
// 	{

// 	}
// }
