// let timeStart = window.performance.now();

import {input_data} from "./data.js"


let lines = input_data;

lines = input_data.split("\n");


for (let i = 0; i < lines.length; i++)
{
	lines[i] = lines[i].split(" | ");
}
for (let i = 0; i < lines.length; i++)
{
	for (let a = 0; a < 2; a++)
	{
		lines[i][a] = lines[i][a].split(" ");
	}

}

console.log(lines);

let p2count = 0;
// let p1count = 0;

for (let i = 0; i < lines.length; i++)
{
	let patterns = [];

	for (let c = 0; c < lines[i][0].length; c++)
	{
		let line = lines[i][0][c];

		let pattern = 0;
		for (let s = 0; s < line.length; s++)
		{
			pattern |= 1 << (line.charCodeAt(s) - 97)
		}

		if (line.length === 2){ // 1
			patterns[1] = pattern;
		}
		else if (line.length === 4){ // 4
			patterns[4] = pattern;
		}
		else if (line.length === 3){ // 7
			patterns[7] = pattern;
		}
		else if (line.length === 7){ // 8
			patterns[8] = pattern;
		}
	}

	for (let c = 0; c < lines[i][0].length; c++)
	{
		let line = lines[i][0][c];
		let pattern = 0;
		for (let s = 0; s < line.length; s++)
		{
			pattern |= 1 << (line.charCodeAt(s) - 97)
		}

		if ((pattern | patterns[4]) === pattern && pattern !== patterns[8] && pattern !== patterns[4]){
			patterns[9] = pattern;
		}
		else if ((countBits(pattern | patterns[1]) === 6) && (pattern | patterns[1]) === pattern)
		{
			patterns[0] = pattern;
		}
		else if (line.length === 6){
			patterns[6] = pattern;
		}
	}

	let p0 = patterns[7] ^ patterns[1];
	let p1 = patterns[1] ^ patterns[4];
	let p2 = patterns[9] ^ patterns[8];
	let p3 = patterns[9] ^ patterns[4] ^ p0;
	let p4 = patterns[8] ^ patterns[0];
	let p5 = p1 ^ p4;
	let p6 = patterns[8] ^ p0 ^ p2 ^ p3 ^ p4 ^ p5;
	let p7 = patterns[6] ^ patterns[8];
	let p8 = p6 ^ p7;

	patterns[3] = p6 | p0 | p4 | p3;
	patterns[2] = p0 | p7 | p4 | p2 | p3;
	patterns[5] = p0 | p5 | p4 | p8 | p3;

	let subCount = "";
	for (let c = 0; c < lines[i][1].length; c++)
	{
		let line = lines[i][1][c];
		let pattern = 0;
		for (let s = 0; s < line.length; s++)
		{
			pattern |= 1 << (line.charCodeAt(s) - 97)
		}
		let ix = patterns.indexOf(pattern);
		subCount += ix.toString();
	}
	p2count+= Number(subCount);
	//978171
}

console.log(p2count);

// console.log(window.performance.now() - timeStart);

function countBits(binaryNumber)
{
	let count = 0;
	for (let i = 0; i < 7; i++)
	{
		if (((binaryNumber >> i) & 1) === 1) count++;
	}
	return count;
}
