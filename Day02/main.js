import {input_data} from "./data.js"

let lines = input_data.split("\n");
lines = lines.map(el => el.split(" "));
console.log(lines);

let depth = 0;
let horiz = 0;
let aim = 0;
for (let i = 0; i < lines.length - 1; i++)
{
	if (lines[i][0] === "forward") horiz += Number(lines[i][1])
	if (lines[i][0] === "down") depth += Number(lines[i][1])
	if (lines[i][0] === "up") depth -= Number(lines[i][1])
}
console.log(depth * horiz);

depth = 0;
horiz = 0;
aim = 0;
for (let i = 0; i < lines.length - 1; i++)
{
		if (lines[i][0] === "forward"){
			horiz += Number(lines[i][1])
			depth += aim * Number(lines[i][1])
		}
		if (lines[i][0] === "down") aim += Number(lines[i][1])
		if (lines[i][0] === "up") aim -= Number(lines[i][1])

}
console.log(depth * horiz);