import {input_data} from "./data.js"

let lines = input_data.split(",").map(Number);
let fishes = [0, 0, 0, 0, 0, 0, 0, 0, 0];

for (let i = 0; i < lines.length; i++)
{
	fishes[lines[i]]++;
}
for (let d = 0; d < 256; d++)
{
	let s = fishes.shift();
	fishes[8] = s;
	fishes[6] += s;
}
let count = 0;
for (let i = 0; i < 9; i++)
{
	count += fishes[i];
}
console.log(count)