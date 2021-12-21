// import {input_data} from "./data.js"

// let lines = input_data.split("\n").map(Number);

// for (let i = 0; i < lines.length; i++)
// {
// 	lines[i] = lines[i].split("").map(Number)
// }
// console.log(lines);

// track = 1;
// track = (track % 1) + 1
// 0->1
// 9->10

// position = Math.random() * 9 + 1
// 1 to 10

let die = getDie();

function getDie()
{
	let value = 0;
	function getValue()
	{
		value++;
		return value;
	}
	function peekValue()
	{
		return value;
	}
	return ({
			getValue,
			peekValue
		});
}

function newPos(currPos, add)
{
	currPos += add
	while (currPos > 10)
	{
		currPos -= 10
	}
	return currPos
}

function genPlayer()
{
	let player = {
		score: 0,
		position: Math.random() * 9 + 1,
	}
	return player
}

function takeTurn(player)
{
	let dieValue = die.getValue() + die.getValue() + die.getValue();
	player.position = newPos(player.position, dieValue)
	player.score += player.position;
}



let player1 = genPlayer();
player1.position = 3;
let player2 = genPlayer();
player2.position = 5;

let players = [player1, player2];

while (true) {
	takeTurn(player1);
	takeTurn(player2);
	// players.forEach(el => {
		// takeTurn(el)
	// })
	let min = Math.min(player1.score, player2.score)
	let max = Math.max(player1.score, player2.score)

	if (max >= 1000)
	{
		console.log(min * die.peekValue())
		break;
	}
}

//826500
//711480