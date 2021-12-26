let stor = [

	0, // 0 score

	   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	// .  .  o  .  o  .  o  .  o  .  .
	// 1  2  3  4  5  6  7  8  9  10 11  

	0, // 12
	4, // D +1
	4, // D +2
	4, // D +3
	2, // B +4

	0, // 17 = 12 + 5
	3, // C
	3, // C
	2, // B
	3, // C

	0, // 22
	1, // A
	2, // B
	1, // A
	4, // D

	0, // 27
	2, // B
	1, // A
	3, // C
	1, // A

];

let stor2 = [

	0, // 0 score

	   3, 1, 0, 4, 0, 0, 0, 0, 0, 4, 4,
	// .  .  o  .  o  .  o  .  o  .  .
	// 1  2  3  4  5  6  7  8  9  10 11  

	1, // 12
	4, // D +1
	4, // D +2
	4, // D +3
	2, // B +4

	0, // 17 = 12 + 5
	3, // C
	3, // C
	2, // B
	3, // C

	0, // 22
	1, // A
	2, // B
	1, // A
	4, // D

	4, // 27
	2, // B
	1, // A
	3, // C
	1, // A
];

let results = [];

function tickHallway(state)
{
	for (let i = 1; i <= 11; i++)
	{
		let destType = state[i];
		if (destType > 0)
		{	
			let energy = 0;
			let pointer = state[(destType - 1) * 5 + 12]
			for (let j = i + 1; j <= 9; j++)
			{
				energy++;
				if (state[j] > 0) break;
				else if (j === 3 && destType === 1 && pointer >= 4) attemptDest(state, destType, i, energy, pointer);
				else if (j === 5 && destType === 2 && pointer >= 4) attemptDest(state, destType, i, energy, pointer);
				else if (j === 7 && destType === 3 && pointer >= 4) attemptDest(state, destType, i, energy, pointer);
				else if (j === 9 && destType === 4 && pointer >= 4) attemptDest(state, destType, i, energy, pointer);
			}
			energy = 0;
			for (let j = i - 1; j >= 3; j--)
			{
				energy++;
				if (state[j] > 0) break;
				else if (j === 3 && destType === 1 && pointer >= 4) attemptDest(state, destType, i, energy, pointer);
				else if (j === 5 && destType === 2 && pointer >= 4) attemptDest(state, destType, i, energy, pointer);
				else if (j === 7 && destType === 3 && pointer >= 4) attemptDest(state, destType, i, energy, pointer);
				else if (j === 9 && destType === 4 && pointer >= 4) attemptDest(state, destType, i, energy, pointer);
			}
		}
	}
}

function attemptDest(state, destType, originalPos, distance, pointer)
{
	let cost = 10 ** (destType - 1);
	distance += (4 - (pointer - 4));
	state = [...state];
	state[0] += cost * distance;
	state[originalPos] = 0;
	state[(destType - 1) * 5 + 12]++;
	
	if (state[12] === 8 &&
		state[17] === 8 &&
		state[22] === 8 &&
		state[27] === 8)
	{
		results.push(state[0])
	}
	else
	{
		tickHallway(state)
		tickBurrows(state)
	}
}

function tickBurrows(state)
{
	for (let i = 0; i <= 3; i++)
	{
		let offset = i * 5 + 12
		let pointer = state[offset]
		if (pointer < 4){
			let i2 = (i + 1) * 2 + 1 // 3 5 7 9
			let destType = state[offset + pointer + 1]
			let cost = 10 ** (destType - 1);
			let energy = pointer + 1;
			for (let j = i2 + 1; j <= 11; j++)
			{
				if (state[j] > 0) break;
				if (j === 3 || j === 5 || j === 7 || j === 9) continue;
				let distance = (j - i2)
				let cost2 = cost * (energy + distance)
				parkHallway(state, cost2, i, j, destType)
			}
			energy = pointer + 1;
			for (let j = i2 - 1; j >= 1; j--)
			{
				if (state[j] > 0) break;
				if (j === 3 || j === 5 || j === 7 || j === 9) continue;
				let distance = (i2 - j)
				let cost2 = cost * (energy + distance)
				parkHallway(state, cost2, i, j, destType)
			}
		}
	}
}

function parkHallway(state, energy, index, stop, destType)
{
	state = [...state];
	state[0] += energy;
	state[stop] = destType;
	state[index * 5 + 12]++;
	tickHallway(state)
	tickBurrows(state)

}

tickBurrows(stor)
	// tickHallway(stor2)

console.log(results.sort((a, b)=>a-b))