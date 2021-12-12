import {input_data} from "./data.js"

let lines = input_data;
lines = lines.split("\n");
for (let i = 0; i < lines.length; i++)
{
	lines[i] = lines[i].split("-")
}

const connections = {};
for (let i = 0; i < lines.length; i++)
{
	const key = lines[i][0];
	const val = lines[i][1];
	if (connections[key] === undefined) connections[key] = [];
	if (connections[val] === undefined) connections[val] = [];
	connections[key].push(val);
	connections[val].push(key);
}

const paths = [];
function move(start, path, hasDouble)
{
	const connection = connections[start];
	for (let i = 0; i < connection.length; i++)
	{
		const nextStart = connection[i];
		const newPath = [...path];
		if (nextStart === "end")
		{
			newPath.push("end");
			paths.push(newPath);
			continue;
		}
		else if (
			newPath.indexOf(nextStart) === -1 ||
			nextStart === nextStart.toUpperCase()
		)
		{
			newPath.push(nextStart);
			move(nextStart, newPath, hasDouble);
		}
		// remove this elif for part 1 solution:
		else if (
			newPath.indexOf(nextStart) !== -1 &&
			nextStart === nextStart.toLowerCase() &&
			hasDouble === false &&
			nextStart !== "start"
		)
		{
			newPath.push(nextStart);
			move(nextStart, newPath, true);
		}
	}
}

move("start", ["start"], false);

console.log(paths);