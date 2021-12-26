function program2(input)
{
	input = input.split("").map(Number)
	let x = 0;
	let z = 0;
	let w = 0;

	w = input[0]
	x = z % 26 + 10 === w ? 0 : 1
	z = z * (25 * x + 1) + (w + 13) * x

	console.log(x, z)

	w = input[1]
	x = z % 26 + 13 === w ? 0 : 1
	z = z * (25 * x + 1) + (w + 10) * x

	console.log(x, z)

	w = input[2]
	x = z % 26 + 13 === w ? 0 : 1
	z = z * (25 * x + 1) + (w + 3) * x

	console.log(x, z)

	w = input[3]
	x = z % 26 - 11 === w ? 0 : 1
	z = Math.floor(z / 26) * (25 * x + 1) + (w + 1) * x

	console.log(x, z)

	w = input[4]
	x = z % 26 + 11 === w ? 0 : 1
	z = z * (25 * x + 1) + (w + 9) * x

	console.log(x, z)

	w = input[5]
	x = z % 26 - 4 === w ? 0 : 1
	z = Math.floor(z / 26) * (25 * x + 1) + (w + 3) * x

	console.log(x, z)

	w = input[6]
	x = z % 26 + 12 === w ? 0 : 1
	z = z * (25 * x + 1) + (w + 5) * x

	console.log(x, z)

	w = input[7]
	x = z % 26 + 12 === w ? 0 : 1
	z = z * (25 * x + 1) + (w + 1) * x

	console.log(x, z)

	w = input[8]
	x = z % 26 + 15 === w ? 0 : 1
	z = z * (25 * x + 1) + (w + 0) * x

	console.log(x, z)

	w = input[9]
	x = z % 26 - 2 === w ? 0 : 1
	z = Math.floor(z / 26) * (25 * x + 1) + (w + 13) * x

	console.log(x, z)

	w = input[10]
	x = z % 26 - 5 === w ? 0 : 1
	z = Math.floor(z / 26) * (25 * x + 1) + (w + 7) * x

	console.log(x, z)

	w = input[11]
	x = z % 26 - 11 === w ? 0 : 1
	z = Math.floor(z / 26) * (25 * x + 1) + (w + 15) * x

	console.log(x, z)

	w = input[12]
	x = z % 26 - 13 === w ? 0 : 1
	z = Math.floor(z / 26) * (25 * x + 1) + (w + 12) * x

	console.log(x, z)

	w = input[13]
	x = z % 26 - 10 === w ? 0 : 1
	z = Math.floor(z / 26) * (25 * x + 1) + (w + 8) * x

	console.log(x, z)

	return (z);

}