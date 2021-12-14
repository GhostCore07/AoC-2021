import {input_data} from "./data.js"
import {input_data2} from "./data.js"

let lines = input_data;
lines = lines.split("\n");

let decode = {};
for (let i = 0; i < lines.length; i++)
{
	lines[i] = lines[i].split(" -> ");
	decode[lines[i][0]] = lines[i][1];
}

let lines2 = input_data2;
lines2 = lines2.split("");

let duplicates = {};

let decode2 = {};
for (let i = 0; i < lines2.length - 1; i++)
{
	let a = lines2[i]
	let b = lines2[i+1]
	let code = a + b;
	if (decode2[code] === undefined) decode2[code] = 0;
	decode2[code]++;

	if (duplicates[a] === undefined) duplicates[a] = 0;
	if (i !== 0) duplicates[a]++;
}

let decode3;
decode3 = getNextPolymer(decode2);
for (let i = 0; i < 39; i++) //change 39 to 9 for part 1
{
	decode3 = getNextPolymer(decode3);
}

function getNextPolymer(input)
{
	let temp = {};
	Object.entries(input).forEach(el => {
		let a = el[0][0];
		let b = decode[el[0]];
		let c = el[0][1];
		let unit1 = a + b;
		let unit2 = b + c;
		if (temp[unit1] === undefined) temp[unit1] = 0;
		if (temp[unit2] === undefined) temp[unit2] = 0;
		if (duplicates[b] === undefined) duplicates[b] = 0;
		duplicates[b] += el[1];
		temp[unit1] += el[1];
		temp[unit2] += el[1];
	})
	return temp;
}

let counts = {};
Object.entries(decode3).forEach(el => {
	let a = el[0][0];
	let b = el[0][1];
	if (counts[a] === undefined) counts[a] = 0;
	if (counts[b] === undefined) counts[b] = 0;
	counts[a] += el[1];
	counts[b] += el[1];
})

let max = 0;
let min = Number.POSITIVE_INFINITY;
Object.entries(counts).forEach(el => {
	let val = el[1] - duplicates[el[0]]
	if (val > max) max = val;
	if (val < min) min = val;
})

console.log(max - min)