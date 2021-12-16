import {input_data} from "./data.js"
let lines = input_data.split("").map(el => parseInt(el, 16).toString(2).padStart(4, "0")).join("");

// packet version (3 bits)
// packet type ID (3 bits)
	// 4 -> literal value
		// group flag (1 bit)
			// 1 -> normal group
			// 0 -> last group
		// group (4 bits)
	// !4 -> operator
		// length type ID (1 bit)
			// 0 -> total length in bits of sub-packets (15 bits)
			// 1 -> number of sub-packets (11 bits)

let packets = [];
let count = 0;

console.log(readPacket(lines, 0, packets), lines.length)

function readPacket(input, start=0, dest)
{
	// dest.push(packet);
	let pointer = start;

	function reads(n)
	{
		let s = input.substring(pointer, pointer+n);
		pointer += n;
		return s;
	}
	function readi(n)
	{
		let s = input.substring(pointer, pointer+n);
		pointer += n;
		return parseInt(s, 2);
	}

	let pVer = readi(3)
	count+=pVer;
	// console.log("version: ", pVer)

	let tID = readi(3)

	if (tID === 4)
	{
		let flag;
		let num = "";
		do {
			flag = readi(1);
			num = num + reads(4);
		} while (flag === 1)
		num = parseInt(num, 2);
		dest.push(num)
		// console.log("literal: ", num)
	}
	else
	{
		let packet = [];
		let flag = readi(1);
		if (flag === 1)
		{
			let val = readi(11);
			// console.log ("sub packets: ", val)
			for (let i = 0; i < val; i++)
			{
				pointer = readPacket(input, pointer, packet)
			}
		}
		else
		{
			let val = readi(15);
			// console.log("sub packet length: ", val)
			let s = reads(val)
			let tempPointer = 0;
			do
			{
				tempPointer = readPacket(s, tempPointer, packet);
			} while (tempPointer < val)
		}

		let result = 0;
		if (tID === 0) // sum
		{
			result = packet.reduce((a, b) => a + b)
		}
		else if (tID === 1) // product
		{
			result = packet.reduce((a, b) => a * b)
		}
		else if (tID === 2) // min
		{
			result = packet.reduce((a, b) => Math.min(a, b))
		}
		else if (tID === 3) // max
		{
			result = packet.reduce((a, b) => Math.max(a, b))	
		}
		else if (tID === 5) // greater than
		{
			let a = packet[0];
			let b = packet[1];
			result = a > b ? 1 : 0;
		}
		else if (tID === 6) // less than
		{
			let a = packet[0];
			let b = packet[1];
			result = a < b ? 1 : 0;
		}
		else if (tID === 7) // equal to
		{
			let a = packet[0];
			let b = packet[1];
			result = a === b ? 1 : 0;
		}

		dest.push(result);
	}
	return pointer;
}

console.log(packets)
console.log(count)