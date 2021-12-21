function getScores(t, p1, p2, p1s, p2s, m, c, result)
{
	if (t)
	{
		p1 += m;
		if (p1 > 10) p1 -= 10;
		p1s += p1;

		if (p1s >= 21)
		{
			result[0] += c;
			return;
		}

	}
	else
	{
		p2 += m;
		if (p2 > 10) p2 -= 10;
		p2s += p2;
		if (p2s >= 21)
		{
			result[1] += c;
			return;
		}
	}
	
	t = !t;

	getScores(t, p1, p2, p1s, p2s, 3, c*1, result)
	getScores(t, p1, p2, p1s, p2s, 4, c*3, result)
	getScores(t, p1, p2, p1s, p2s, 5, c*6, result)
	getScores(t, p1, p2, p1s, p2s, 6, c*7, result)
	getScores(t, p1, p2, p1s, p2s, 7, c*6, result)
	getScores(t, p1, p2, p1s, p2s, 8, c*3, result)
	getScores(t, p1, p2, p1s, p2s, 9, c*1, result)
}

let result = [0, 0];

getScores(true, 3, 5, 0, 0, 3, 1, result)
getScores(true, 3, 5, 0, 0, 4, 3, result)
getScores(true, 3, 5, 0, 0, 5, 6, result)
getScores(true, 3, 5, 0, 0, 6, 7, result)
getScores(true, 3, 5, 0, 0, 7, 6, result)
getScores(true, 3, 5, 0, 0, 8, 3, result)
getScores(true, 3, 5, 0, 0, 9, 1, result)

console.log(result)