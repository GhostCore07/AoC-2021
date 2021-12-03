import {input_data} from "./data.js"

let lines = input_data.split("\n");
lines = lines.map(el => el.split(""));

for (let i = 0; i < lines.length; i++)
{
	lines[i] = lines[i].map(el => Number(el));
}
console.log(lines);

function getPart1(lines)
{
	let one = 0;
	let num = ""
	let num2 = ""

	for (let i = 0; i < lines[0].length; i++)
	{
		for (let j = 0; j < lines.length; j++)
		{
			if (lines[j][i] == 1 ) one++
		}
		
		if (one > 500)
		{
			num += "1";
			num2 += "0";

		}
		else
		{
			num += "0";
			num2 += "1";

		}
		one = 0;
	}
	let a = parseInt(num, 2);
	let b = parseInt(num2, 2);
	console.log(a*b);
}

function getNums(nums, index)
{
	const nums2 = [];
	let one = 0;

	for (let j = 0; j < nums.length; j++)
	{
		if (nums[j][index] == 1 ) one++
	}
	
	if (one >= nums.length / 2)
	{
		for (let j = 0; j < nums.length; j++)
		{
			if (nums[j][index] == 1 ) nums2.push(nums[j]);
		}
	}
	else
	{
		for (let j = 0; j < nums.length; j++)
		{
			if (nums[j][index] == 0 ) nums2.push(nums[j]);
		}
	}
	
	if (nums2.length == 1) return nums2;
	return getNums(nums2, index + 1);
}

function getNums2(nums, index)
{
	const nums2 = [];
	let one = 0;

	for (let j = 0; j < nums.length; j++)
	{
		if (nums[j][index] == 1 ) one++
	}
	
	if (one < nums.length / 2)
	{
		for (let j = 0; j < nums.length; j++)
		{
			if (nums[j][index] == 1 ) nums2.push(nums[j]);
		}
	}
	else
	{
		for (let j = 0; j < nums.length; j++)
		{
			if (nums[j][index] == 0 ) nums2.push(nums[j]);
		}
	}
	
	if (nums2.length == 1) return nums2;
	// console.log(nums2)
	return getNums2(nums2, index + 1);
}

getPart1(lines);
console.log(parseInt(getNums(lines, 0)[0].join(""), 2) * parseInt(getNums2(lines, 0)[0].join(""), 2));