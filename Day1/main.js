import {input_data} from "./data.js"

let lines = input_data.split("\n");
lines = lines.map(el => Number(el));
console.log(lines);

let count = 0;
for (let i = 0; i < lines.length - 1; i++)
{
	if (lines[i] < lines[i+1]) count++;
}
console.log(count);
count = 0;
for (let i = 0; i < lines.length - 3; i++)
{
	if (lines[i] < lines[i+3]) count++;
}
console.log(count);