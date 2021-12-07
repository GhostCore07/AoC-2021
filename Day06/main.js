import {input_data} from "./data.js"

function computeLanternFish(data, days)
{
	const lines = data.split(",").map(Number);
	const fishes = [0, 0, 0, 0, 0, 0, 0, 0, 0];

	for (let i = 0; i < lines.length; i++)
	{
		fishes[lines[i]]++;
	}
	for (let d = 0; d < days; d++)
	{
		const s = fishes.shift();
		fishes[8] = s;
		fishes[6] += s;
	}
	let count = 0;
	for (let i = 0; i < 9; i++)
	{
		count += fishes[i];
	}
	console.log(count);
}

computeLanternFish(input_data, 80);
computeLanternFish(input_data, 256);