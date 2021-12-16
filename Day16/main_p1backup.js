import {input_data} from "./data.js"

// let lines = "620080001611562C8802118E34".split("").map(el => parseInt(el, 16).toString(2).padStart(4, "0")).join("");
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

console.log(readPacket(lines, 0, packets))
console.log(lines, lines.length);


function readPacket(input, start=0, dest)
{

	let packet = [];
	dest.push(packet);
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
	console.log("version: ", pVer)

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
		packet.push(num)
		console.log("literal: ", num)
	}
	else
	{
		let flag = readi(1);
		if (flag === 1)
		{
			let val = readi(11);
			console.log ("sub packets: ", val)
			let subpacket = [];
			packet.push(subpacket);
			for (let i = 0; i < val; i++)
			{
				pointer = readPacket(input, pointer, subpacket)
			}
			// console.log(val);
		}
		else
		{
			let val = readi(15);
			console.log("sub packet length: ", val)
			let s = reads(val)
			let subpacket = [];
			packet.push(subpacket);
			let tempPointer = 0;
			do
			{
				tempPointer = readPacket(s, tempPointer, subpacket);
			} while (tempPointer < val)
		}
	}
	return pointer;
}

console.log(packets)
console.log(count)

// 681