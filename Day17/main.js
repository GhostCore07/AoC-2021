let y = 0;
let vy = 128;

let ymax = 0;
while (y > -129)
{
	y += vy
	if (y > ymax) ymax = y;
	vy -= 1
}

console.log(ymax)

let hit = 0;

for (let vx = 0; vx <= 1000; vx++)
{
	for (let vy = -1000; vy <= 10000; vy++)
	{
		let x = 0;
		let vx2 = vx;
		// let xstep = 0;

		let y = 0;
		let vy2 = vy;
		// let ystep = 0;

		while (x <= 171 && y >= -129)
		{
			x += vx2
			vx2 -= Math.sign(vx2)
			// console.log(xstep, vx, x)
			// xstep++;

			y += vy2
			vy2 -= 1
			// console.log(ystep, vy, y)
			// ystep++;

			if (x >= 150 && x <= 171 && y >= -129 && y <=-70)
			{
				hit++
				break;
			}
		}

	}
}

console.log(hit)