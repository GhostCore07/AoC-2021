import {input_data} from "./data.js"

let lines = input_data.split("\n")

let counter = 0;
let inp = (a) => a + " = input[" + counter++ + "];"
let add = (a, b) => a + " = " + a + " + " + b + ";";
let mul = (a, b) => a + " = " + a + " * " + b + ";";
let div = (a, b) => a + " = " + "Math.floor(" + a + " / " + b + ");"
let mod = (a, b) => a + " = " + a + " % " + b + ";";
let eql = (a, b) => a + " = " + a + " === " + b + " ? 1 : 0;"

let s2 = "";

for (let i = 0; i < lines.length; i++)
{
	let cmd = lines[i].split(" ");
	let ins = cmd[0];
	let op0 = "\"" + cmd[1] + "\""
	let op1	= "\"" + cmd[2] + "\""

	let s;
	if (op1 === undefined)
	{
		s = ins + "(" + op0 + ")"
	}
	else
	{
		s = ins + "(" + op0 + ", " + op1 + ")"
	}
	
	// s2 += eval(s)
	s2 += eval(s) + "\n"

	// lines[i] = eval(s)
}

console.log(s2)

// let num = Math.floor(Math.random() * 100000000000000);
// let s = num.toString(10).padStart(14, "0")

let s = "99914947313167"
console.log(program2(s))
console.log(program(s))


function program(input)
{
	input = input.split("").map(Number)
	let x = 0;
	let y = 0;
	let z = 0;
	let w = 0;
	
	w = input[0];
	x = x * 0;
	x = x + z;
	x = x % 26;
	z = Math.floor(z / 1);
	x = x + 10;
	x = x === w ? 1 : 0;
	x = x === 0 ? 1 : 0;
	y = y * 0;
	y = y + 25;
	y = y * x;
	y = y + 1;
	z = z * y;
	y = y * 0;
	y = y + w;
	y = y + 13;
	y = y * x;
	z = z + y;

	// console.log(x, z)

	w = input[1];
	x = x * 0;
	x = x + z;
	x = x % 26;
	z = Math.floor(z / 1);
	x = x + 13;
	x = x === w ? 1 : 0;
	x = x === 0 ? 1 : 0;
	y = y * 0;
	y = y + 25;
	y = y * x;
	y = y + 1;
	z = z * y;
	y = y * 0;
	y = y + w;
	y = y + 10;
	y = y * x;
	z = z + y;

	// console.log(x, z)

	w = input[2];
	x = x * 0;
	x = x + z;
	x = x % 26;
	z = Math.floor(z / 1);
	x = x + 13;
	x = x === w ? 1 : 0;
	x = x === 0 ? 1 : 0;
	y = y * 0;
	y = y + 25;
	y = y * x;
	y = y + 1;
	z = z * y;
	y = y * 0;
	y = y + w;
	y = y + 3;
	y = y * x;
	z = z + y;

	// console.log(x, z)

	w = input[3];
	x = x * 0;
	x = x + z;
	x = x % 26;
	z = Math.floor(z / 26);
	x = x + -11;
	x = x === w ? 1 : 0;
	x = x === 0 ? 1 : 0;
	y = y * 0;
	y = y + 25;
	y = y * x;
	y = y + 1;
	z = z * y;
	y = y * 0;
	y = y + w;
	y = y + 1;
	y = y * x;
	z = z + y;

	// console.log(x, z)

	w = input[4];
	x = x * 0;
	x = x + z;
	x = x % 26;
	z = Math.floor(z / 1);
	x = x + 11;
	x = x === w ? 1 : 0;
	x = x === 0 ? 1 : 0;
	y = y * 0;
	y = y + 25;
	y = y * x;
	y = y + 1;
	z = z * y;
	y = y * 0;
	y = y + w;
	y = y + 9;
	y = y * x;
	z = z + y;
	w = input[5];
	x = x * 0;
	x = x + z;
	x = x % 26;
	z = Math.floor(z / 26);
	x = x + -4;
	x = x === w ? 1 : 0;
	x = x === 0 ? 1 : 0;
	y = y * 0;
	y = y + 25;
	y = y * x;
	y = y + 1;
	z = z * y;
	y = y * 0;
	y = y + w;
	y = y + 3;
	y = y * x;
	z = z + y;
	w = input[6];
	x = x * 0;
	x = x + z;
	x = x % 26;
	z = Math.floor(z / 1);
	x = x + 12;
	x = x === w ? 1 : 0;
	x = x === 0 ? 1 : 0;
	y = y * 0;
	y = y + 25;
	y = y * x;
	y = y + 1;
	z = z * y;
	y = y * 0;
	y = y + w;
	y = y + 5;
	y = y * x;
	z = z + y;
	w = input[7];
	x = x * 0;
	x = x + z;
	x = x % 26;
	z = Math.floor(z / 1);
	x = x + 12;
	x = x === w ? 1 : 0;
	x = x === 0 ? 1 : 0;
	y = y * 0;
	y = y + 25;
	y = y * x;
	y = y + 1;
	z = z * y;
	y = y * 0;
	y = y + w;
	y = y + 1;
	y = y * x;
	z = z + y;
	w = input[8];
	x = x * 0;
	x = x + z;
	x = x % 26;
	z = Math.floor(z / 1);
	x = x + 15;
	x = x === w ? 1 : 0;
	x = x === 0 ? 1 : 0;
	y = y * 0;
	y = y + 25;
	y = y * x;
	y = y + 1;
	z = z * y;
	y = y * 0;
	y = y + w;
	y = y + 0;
	y = y * x;
	z = z + y;
	w = input[9];
	x = x * 0;
	x = x + z;
	x = x % 26;
	z = Math.floor(z / 26);
	x = x + -2;
	x = x === w ? 1 : 0;
	x = x === 0 ? 1 : 0;
	y = y * 0;
	y = y + 25;
	y = y * x;
	y = y + 1;
	z = z * y;
	y = y * 0;
	y = y + w;
	y = y + 13;
	y = y * x;
	z = z + y;
	w = input[10];
	x = x * 0;
	x = x + z;
	x = x % 26;
	z = Math.floor(z / 26);
	x = x + -5;
	x = x === w ? 1 : 0;
	x = x === 0 ? 1 : 0;
	y = y * 0;
	y = y + 25;
	y = y * x;
	y = y + 1;
	z = z * y;
	y = y * 0;
	y = y + w;
	y = y + 7;
	y = y * x;
	z = z + y;
	w = input[11];
	x = x * 0;
	x = x + z;
	x = x % 26;
	z = Math.floor(z / 26);
	x = x + -11;
	x = x === w ? 1 : 0;
	x = x === 0 ? 1 : 0;
	y = y * 0;
	y = y + 25;
	y = y * x;
	y = y + 1;
	z = z * y;
	y = y * 0;
	y = y + w;
	y = y + 15;
	y = y * x;
	z = z + y;
	w = input[12];
	x = x * 0;
	x = x + z;
	x = x % 26;
	z = Math.floor(z / 26);
	x = x + -13;
	x = x === w ? 1 : 0;
	x = x === 0 ? 1 : 0;
	y = y * 0;
	y = y + 25;
	y = y * x;
	y = y + 1;
	z = z * y;
	y = y * 0;
	y = y + w;
	y = y + 12;
	y = y * x;
	z = z + y;
	w = input[13];
	x = x * 0;
	x = x + z;
	x = x % 26;
	z = Math.floor(z / 26);
	x = x + -10;
	x = x === w ? 1 : 0;
	x = x === 0 ? 1 : 0;
	y = y * 0;
	y = y + 25;
	y = y * x;
	y = y + 1;
	z = z * y;
	y = y * 0;
	y = y + w;
	y = y + 8;
	y = y * x;
	z = z + y;

	return (z);
}

function program2(input)
{
	input = input.split("").map(Number)

	for (let i0 = 1; i0 < 10; i0++){
		for (let i1 = 1; i1 < 10; i1++){
			for (let i2 = 1; i2 < 10; i2++){

				let z = i0 + 13
				z = z * 26 + i1 + 10
				z = z * 26 + i2 + 3
				
				let i3 = z % 26 - 11
				if (i3 < 1 || i3 > 9) continue;
				
				z = Math.floor(z / 26)

				let z0 = z;

				for (let i4 = 1; i4 < 10; i4++)
				{
					
					z = z0 * 26 + i4 + 9
				
					let i5 = z % 26 - 4;
					if (i5 < 1 || i5 > 9) continue;
					
					z = Math.floor(z / 26)

					let z1 = z;

					for (let i6 = 1; i6 < 10; i6++){
						for (let i7 = 1; i7 < 10; i7++){
							for (let i8 = 1; i8 < 10; i8++){

								z = z1 * 26 + i6 + 5
								z = z * 26 + i7 + 1
								z = z * 26 + i8

								let i9 = z % 26 - 2;
								if (i9 < 1 || i9 > 9) continue;

								z = Math.floor(z / 26)

								let i10 = z % 26 - 5;
								if (i10 < 1 || i10 > 9) continue;

								z = Math.floor(z / 26)

								let i11 = z % 26 - 11;
								if (i11 < 1 || i11 > 9) continue;

								z = Math.floor(z / 26)

								let i12 = z % 26 - 13;
								if (i12 < 1 || i12 > 9) continue;

								z = Math.floor(z / 26)

								let i13 = z % 26 - 10;
								if (i13 < 1 || i13 > 9) continue;

								z = Math.floor(z / 26)

								// console.log(z)

								// if (z < minz) minz = z;
								if (z === 0)
								{
									console.log(i0, i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12, i13)
									return
								}
							}
						}
					}
				}
			}
		}
	}
	// return (z);

}