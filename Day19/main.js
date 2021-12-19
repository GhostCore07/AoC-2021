import {input_data} from "./data.js"

let nums = input_data.split("\n\n")

for (let i = 0; i < nums.length; i++)
{
	nums[i] = nums[i].split("\n")
	nums[i].shift();

	for (let j = 0; j < nums[i].length; j++)
	{
		nums[i][j] = nums[i][j].split(",").map(Number)
	}
}

// console.log(nums);

// 90 degree rotation on x-y-z
// 24 total configurations

let rotations = 
	[
		"",
		"X",
		"Y",
		"XX",
		"XY",
		"YX",
		"YY",
		"XXX",
		"XXY",
		"XYX",
		"XYY",
		"YXX",
		"YYX",
		"YYY",
		"XXXY",
		"XXYX",
		"XXYY",
		"XYXX",
		"XYYY",
		"YXXX",
		"YYYX",
		"XXXYX",
		"XYXXX",
		"XYYYX",
	];

	function rotateX (num)
	{
		let x0 = num[0];
		let y0 = num[1];
		let z0 = num[2];
		let x = x0;
		let y = -z0;
		let z = y0;
		num[0] = x;
		num[1] = y;
		num[2] = z;


	}
	function rotateY (num)
	{
		let x0 = num[0];
		let y0 = num[1];
		let z0 = num[2];
		let x = z0;
		let y = y0;
		let z = -x0;
		num[0] = x;
		num[1] = y;
		num[2] = z;
	}

	function rotateXinv (num)
	{
		let x0 = num[0];
		let y0 = num[1];
		let z0 = num[2];
		let x = x0;
		let y = z0;
		let z = -y0;
		num[0] = x;
		num[1] = y;
		num[2] = z;


	}
	function rotateYinv (num)
	{
		let x0 = num[0];
		let y0 = num[1];
		let z0 = num[2];
		let x = -z0;
		let y = y0;
		let z = x0;
		num[0] = x;
		num[1] = y;
		num[2] = z;
	}

	function distance (p1, p2)
	{
		let dx = p2[0] - p1[0];
		let dy = p2[1] - p1[1];
		let dz = p2[2] - p1[2];
		let d = Math.sqrt(dx*dx+dy*dy+dz*dz);
		return d;
	}

	function subtract (p1, p2)
	{
		let dx = p1[0] - p2[0];
		let dy = p1[1] - p2[1];
		let dz = p1[2] - p2[2];
		return [dx, dy, dz];
	}

	function add (p1, p2)
	{
		let dx = p1[0] + p2[0];
		let dy = p1[1] + p2[1];
		let dz = p1[2] + p2[2];
		return [dx, dy, dz];
	}

	function add2 (array, p2)
	{
		array[0] += p2[0];
		array[1] += p2[1];
		array[2] += p2[2];
	}

	function rotateInv2(num, dist)
	{
		let revInv = rotations[num].split("").reverse().join("");
		for (let r = 0; r < revInv.length; r++) //0-5
		{
			if (revInv[r] === "X")
			{
				rotateXinv(dist);

			}
			else if (revInv[r] === "Y")
			{
				rotateYinv(dist);
			}
		}
	}

	function rotateInv(data, num, dist)
	{
		let result = [];
		let revInv = rotations[num].split("").reverse().join("");

		for (let i = 0; i < data.length; i++)
		{
			let point = [...data[i]];
			result.push(point);

			for (let r = 0; r < revInv.length; r++) //0-5
			{
				if (revInv[r] === "X")
				{
					rotateXinv(point);

				}
				else if (revInv[r] === "Y")
				{
					rotateYinv(point);
				}
			}
		}

		return result;
	}

	function rotateBy2(num, dist)
	{
		let rev = rotations[num];
		for (let r = 0; r < rev.length; r++) //0-5
		{
			if (rev[r] === "X")
			{
				rotateX(dist);
			}
			else if (rev[r] === "Y")
			{
				rotateY(dist);
			}
		}
	}

	function rotateBy(data, num, dist)
	{
		let result = [];
		let rev = rotations[num];

		for (let i = 0; i < data.length; i++)
		{
			let point = [...data[i]];
			result.push(point);

			for (let r = 0; r < rev.length; r++) //0-5
			{
				if (rev[r] === "X")
				{
					rotateX(point);
				}
				else if (rev[r] === "Y")
				{
					rotateY(point);
				}
			}
		}

		return result;
	}

	function offsetBy(data, v1, v2, dist)
	{
		
		let result = [];
		let offsetFwd = subtract(v1, v2)
		add2(dist, offsetFwd);
		for (let i = 0; i < data.length; i++)
		{
			let point = add(data[i], offsetFwd)
			result.push(point);
		}
		return result;
	}

	function offsetByInv(data, v1, v2, dist)
	{
		
		let result = [];
		let offsetRev = subtract(v2, v1);
		add2(dist, offsetRev)
		for (let i = 0; i < data.length; i++)
		{
			let point = add(data[i], offsetRev)
			result.push(point);
		}
		return result;
	}


	// main array, 34 elements
	// each element had 24 children
	// each child has the rotated points in it

	// main array 34 elements
	// each element has an array of distances
	// the distance is the distance from this probe to every other probe (not repeating)
	
let main = [];

for (let i = 0; i < nums.length; i++) //34
{

	let element = [];

	main.push(element);

	for (let p1 = 0; p1 < nums[i].length - 1; p1++)
	{
		let p = [];
		element.push(p);

		for (let p2 = p1 + 1; p2 < nums[i].length; p2++)
		{
			let a = nums[i][p1];
			let b = nums[i][p2];
			let d = distance(a, b);
			p.push(d);
		}
	}
}

let tests = [];

let count = 0;
for (let i = 0; i < main.length - 1; i++) // 35 sensors 1
{
	for (let i2 = i + 1; i2 < main.length; i2++) // 35 sensors 2
	{
		for (let e = 0; e < main[i].length; e++) // ~24 beacons
		{
			for (let d = 0; d < main[i][e].length; d++) // <25 distances
			{
				reset:
				for (let e2 = 0; e2 < main[i2].length; e2++) // ~24 beacons
				{
					for (let d2 = 0; d2 < main[i2][e2].length; d2++) // < 25 distances
					{
						if (Math.abs(main[i][e][d] - main[i2][e2][d2]) === 0)
						{
							count++;
							continue reset;
						}
					}
				}
			}
		}
		if (count >= 12) 
		{
			// console.log(count)
			tests.push([i, i2, count])
		}
		count = 0;
	}
}

// console.log(tests)
// console.log(count)

let main2 = [];

for (let i = 0; i < nums.length; i++) //34
{

	let element = [];

	main2.push(element);

	for (let j = 0; j < rotations.length; j++) //24
	{

		let child = [];
		element.push(child);

		for (let p = 0; p < nums[i].length; p++)
		{
		
			let num = [...nums[i][p]] //len = 3
			child.push(num);

			for (let r = 0; r < rotations[j].length; r++) //0-5
			{
				if (rotations[j][r] === "X")
				{
					rotateX(num);
				}
				else if (rotations[j][r] === "Y")
				{
					rotateY(num);
				}
			}
		}
	}
}


// console.log(main2)

let thinned = []

// short test (precomputed)


tests = []; //skip

reset:
for (let i = 0; i < tests.length; i++) // scanner pair to test
{
	let a = tests[i][0];
	let b = tests[i][1];

	let aa = main2[a]; // 24 rotations of scanner 1
	let bb = main2[b]; // 24 rotations of scanner2

	for (let e = 0; e < 24; e++)
	{
		for (let q = 0; q < 24; q++)
		{
			let p1s = aa[e];
			let p2s = bb[q];
			for (let p1 = 0; p1 < p1s.length; p1++)
			{
				let origin1 = p1s[p1];
				for (let p2 = 0; p2 < p2s.length; p2++)
				{
					let origin2 = p2s[p2];
					let matches = 0;

					nextpt:
					for (let p3 = 0; p3 < p1s.length; p3++)
					{
						let offset1 = subtract(origin1, p1s[p3])
						for (let p4 = 0; p4 < p2s.length; p4++)
						{
							let offset2 = subtract(origin2, p2s[p4])
							if (
								offset1[0] === offset2[0] &&
								offset1[1] === offset2[1] &&
								offset1[2] === offset2[2]
							){
								matches++;
								if (matches >= 12)  //have to check this one before continue nextpt
								{
									thinned.push([a, b, e, q, p1, p2])
									continue reset;
								}
								continue nextpt;
							}
						}
					}
				}
			}
		}
	}
}

// for (let i = 0; i < thinned.length; i++)
// {
// 	console.log(thinned[i])
// }


thinned = [
	[ 0, 5, 0, 3, 0, 9 ],
	[ 0, 12, 0, 12, 0, 13 ],
	[ 0, 21, 0, 14, 2, 9 ],
	[ 0, 24, 0, 17, 2, 20 ],
	[ 1, 16, 0, 10, 0, 2 ],
	[ 2, 10, 0, 23, 3, 19 ],
	[ 2, 23, 0, 19, 0, 15 ],
	[ 3, 28, 0, 3, 0, 14 ],
	[ 3, 31, 0, 10, 0, 7 ],
	[ 4, 30, 0, 1, 2, 4 ],
	[ 5, 8, 0, 23, 2, 23 ],
	[ 5, 31, 0, 22, 0, 21 ],
	[ 5, 32, 0, 5, 0, 10 ],
	[ 5, 34, 0, 19, 2, 11 ],
	[ 6, 15, 0, 9, 1, 18 ],
	[ 7, 14, 0, 5, 0, 20 ],
	[ 8, 11, 0, 18, 1, 16 ],
	[ 8, 21, 0, 2, 0, 10 ],
	[ 8, 25, 0, 15, 3, 6 ],
	[ 9, 11, 0, 6, 1, 22 ],
	[ 9, 17, 0, 3, 1, 6 ],
	[ 9, 19, 0, 17, 0, 10 ],
	[ 9, 25, 0, 17, 0, 5 ],
	[ 9, 29, 0, 7, 3, 12 ],
	[ 10, 30, 0, 15, 1, 16 ],
	[ 11, 16, 0, 23, 0, 13 ],
	[ 12, 31, 0, 18, 4, 6 ],
	[ 13, 17, 0, 7, 2, 6 ],
	[ 13, 25, 0, 22, 2, 2 ],
	[ 14, 26, 0, 7, 1, 1 ],
	[ 14, 30, 0, 17, 2, 14 ],
	[ 15, 32, 0, 11, 0, 3 ],
	[ 16, 29, 0, 15, 2, 22 ],
	[ 17, 20, 0, 8, 0, 19 ],
	[ 18, 29, 0, 18, 0, 20 ],
	[ 21, 27, 0, 18, 0, 24 ],
	[ 22, 31, 0, 16, 0, 22 ],
	[ 22, 32, 0, 1, 1, 21 ],
	[ 24, 26, 0, 15, 2, 2 ],
	[ 24, 30, 0, 13, 1, 17 ],
	[ 25, 27, 0, 8, 0, 21 ],
	[ 25, 34, 0, 8, 1, 4 ],
	[ 29, 33, 0, 3, 1, 1 ],
]

let totalCount = 0;
let dupCount = 0;

	// confusing:
	// a is the second column
	// b is the first column
	function scannerFwd(index, a, b, c, distance) // 5 -> 0
	{

		let q = thinned[index][3];

		b = rotateBy(b, q)
		c = rotateBy(c, q)

		rotateBy2(q, distance)

		let p1 = a[thinned[index][4]];
		let p2 = b[thinned[index][5]];

		// b = offsetBy(b, p1, p2)
		c = offsetBy(c, p1, p2, distance)

		// add2(distance, subtract(p1, p2))


		// console.log(a)
		// console.log(b)

		let count2 = 0;
		for (let i = 0; i < a.length; i++)
		{
			for (let j = 0; j < c.length; j++)
			{
				if (
				a[i][0] === c[j][0] &&
				a[i][1] === c[j][1] &&
				a[i][2] === c[j][2]
				)
				{
					count2++;
				}

			}
		}
		// console.log(count2, distance)

		return c;
	}

	

	//a is the first column
	//b is the second column
	function scannerRev(index, a, b, c, distance)
	{


		let q = thinned[index][3];

		a = rotateInv(a, q)
		c = rotateInv(c, q)

		rotateInv2(q, distance);

		let p1 = a[thinned[index][4]];
		let p2 = b[thinned[index][5]];

		// a = offsetByInv(a, p1, p2)
		c = offsetByInv(c, p1, p2, distance)

		// add2(distance, subtract(p2, p1))

		// console.log(a)
		// console.log(b)

		let count2 = 0;
		for (let i = 0; i < c.length; i++)
		{
			for (let j = 0; j < b.length; j++)
			{
				if (
				c[i][0] === b[j][0] &&
				c[i][1] === b[j][1] &&
				c[i][2] === b[j][2]
				)
				{
					count2++;
				}

			}
		}
		// console.log(count2, distance)

		return c;
	}

	function findPath(from, to, steps=[], result=[])
	{
		
		steps.push(from);

		if (steps.length > 100) return result;

		for (let i = 0; i < thinned.length; i++)
		{

			if (thinned[i][0] === from)
			{
				let nextStep = [...steps];

				if(thinned[i][1] === to)
				{
					nextStep.push(thinned[i][1])
					result.push(nextStep)
					return result;
				}
				else if (nextStep.indexOf(thinned[i][1]) === -1)
				{
					findPath(thinned[i][1], to, nextStep, result)
				}
			}
			else if (thinned[i][1] === from)
			{
				let nextStep = [...steps];

				if(thinned[i][0] === to)
				{
					nextStep.push(thinned[i][0])
					result.push(nextStep)
					// console.log(result)
					return result;
				}
				else if (nextStep.indexOf(thinned[i][0]) === -1)
				{
					findPath(thinned[i][0], to, nextStep, result)
				}
			}
		}

		return result;
	}

	let paths = [];
	for (let i = 1; i < 35; i++)
	{
		// let path = findPath(0, i)
		let path = findPath(i, 0)
		// console.log(path)
		paths.push(path[0])
	}

	// console.log(paths);


	// let solved = [];
	let results = [];
	let distances = [[0, 0, 0]];

	results[0] = nums[0];

	for (let c = 2; c < 9; c++)
	{
		for (let i = 0; i < paths.length; i++)
		{
			if (paths[i].length === c)
			{
				let distance = [0, 0, 0];

				let tempResults = [];

				let solveNum = paths[i][0];
				let start = nums[solveNum];

				// console.log("next")
				for (let q = 0; q < paths[i].length - 1; q++)
				{
					for (let j = 0; j < thinned.length; j++)
					{
						if (
							thinned[j][1] === paths[i][q] && //fwd
							thinned[j][0] === paths[i][q+1]
						){
							let a = nums[thinned[j][0]];
							let b = nums[thinned[j][1]];
							start = scannerFwd(j, a, b, start, distance) // 0 5 5
						}
						else if (
							thinned[j][0] === paths[i][q] && //rev
							thinned[j][1] === paths[i][q+1]
						){
							let a = nums[thinned[j][0]];
							let b = nums[thinned[j][1]];
							start = scannerRev(j, a, b, start, distance)
						}
					}
				}

				results[solveNum] = start;
				distances[solveNum] = distance;
			}
		}
	}



	// console.log(results)
	// console.log(distances)

	let results2 = [];

	for (let i = 0; i < results.length; i++)
	{
		results2.push(...results[i])
	}

	for (let i = 0; i < results2.length-1; i++)
	{	
		for (let j = i + 1; j < results2.length; j++)
		{
			let a = results2[i];
			let b = results2[j];
			if (
				a[0] === b[0] &&
				a[1] === b[1] &&
				a[2] === b[2]
			){
				results2.splice(j, 1);
				j--;
			}
		}
	}

	console.log(results2)

	let max = 0;

	for (let i = 0; i < distances.length-1; i++)
	{
		for (let j = i+1; j < distances.length; j++)
		{
			let x0 = distances[i][0]
			let y0 = distances[i][1]
			let z0 = distances[i][2]
			
			let x1 = distances[j][0]
			let y1 = distances[j][1]
			let z1 = distances[j][2]

			let totx = Math.abs(x1 - x0)
			let toty = Math.abs(y1 - y0)
			let totz = Math.abs(z1 - z0)

			let total = (totx + toty + totz);
			// console.log(total)

			if (total > max) max = total;
		}
	}

	console.log(max);


// 8507 too low
// 24308 too high