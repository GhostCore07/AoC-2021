import {input_data} from "./data.js"

let lines = input_data.split("\n");

let nums = [];
let state = [];

for (let i = 0; i < lines.length; i++)
// for (let i = 0; i < 20; i++)
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

let cubes = [nums[0]];
for (let i = 1; i < state.length; i++)
{
	let c1 = nums[i];
	let s = state[i]

	let cubesTemp = [];
	for (let cc = 0; cc < cubes.length; cc++)
	{
		cubesTemp.push(...and(cubes[cc], c1))
	}
	cubes = cubesTemp
	if (s === 1)
	{
		cubes.push(c1)
	}
}

let count = 0;
for (let i = 0; i < cubes.length; i++)
{
	let cube = cubes[i];
	let x0 = cube[0];
	let x1 = cube[1];
	let y0 = cube[2];
	let y1 = cube[3];
	let z0 = cube[4];
	let z1 = cube[5];
	count += (x1 - x0 + 1) * (y1 - y0 + 1) * (z1 - z0 + 1);
}

console.log(count)

function and(cube0, cube1)
{
	let c0x0 = cube0[0];
	let c0x1 = cube0[1];
	let c0y0 = cube0[2];
	let c0y1 = cube0[3];
	let c0z0 = cube0[4];
	let c0z1 = cube0[5];

	const c1x0 = cube1[0];
	const c1x1 = cube1[1];
	const c1y0 = cube1[2];
	const c1y1 = cube1[3];
	const c1z0 = cube1[4];
	const c1z1 = cube1[5];

	if (
		c0x1 < c1x0 || c0x0 > c1x1 ||
		c0y1 < c1y0 || c0y0 > c1y1 ||
		c0z1 < c1z0 || c0z0 > c1z1
	)
	{
		return [cube0]; // no intersection
	}

	if (
		c1x0 <= c0x0 && c1x1 >= c0x1 &&
		c1y0 <= c0y0 && c1y1 >= c0y1 &&
		c1z0 <= c0z0 && c1z1 >= c0z1
	)
	{
		return []; // fully enveloped
	}

	const xcut = [];
	const ycut = [];
	const zcut = [];

	cut(c0x0, c0x1, c1x0, c1x1, xcut)
	cut(c0y0, c0y1, c1y0, c1y1, ycut)
	cut(c0z0, c0z1, c1z0, c1z1, zcut)

	function cut(c0x0, c0x1, c1x0, c1x1, cuts)
	{
		if (c0x0 >= c1x0 && c0x1 <= c1x1) // c0 inside c1
		{
			cuts.push(c0x0, c0x1);
		}
		else if (c1x0 > c0x0 && c1x1 < c0x1) // c1 inside c0
		{
			cuts.push(c0x0, c1x0 - 1, c1x0, c1x1, c1x1 + 1, c0x1);	
		}
		else if (c0x1 >= c1x0 && c0x0 < c1x0) // c1 overlapping right side of c0
		{
			cuts.push(c0x0, c1x0 - 1, c1x0, c0x1);
		}
		else if (c0x1 > c1x1 && c0x0 === c1x0) // weird edge case that only happens one time. it overlaps on the opposite side
		{
			cuts.push(c0x0, c1x1, c1x1 + 1, c0x1);
		}
		else if (c0x0 <= c1x1 && c0x1 >= c1x1) // c1 overlapping left side of c0
		{
			cuts.push(c0x0, c1x1, c1x1 + 1, c0x1);	
		}
		else
		{
			console.log("error?")
		}
	}

	let results = [];
	for (let x = 0; x < xcut.length / 2; x++){
		let x0 = xcut[x*2]
		let x1 = xcut[x*2+1]
		for (let y = 0; y < ycut.length / 2; y++){
			let y0 = ycut[y*2]
			let y1 = ycut[y*2+1]
			for (let z = 0; z < zcut.length / 2; z++){
				let z0 = zcut[z*2]
				let z1 = zcut[z*2+1]
				if (
					x1 < c1x0 || x0 > c1x1 ||
					y1 < c1y0 || y0 > c1y1 ||
					z1 < c1z0 || z0 > c1z1
				)
				{
					results.push([x0, x1, y0, y1, z0, z1]);
				}
			}
		}
	}
	return results;
}