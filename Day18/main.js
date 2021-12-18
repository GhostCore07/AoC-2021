import {input_data} from "./data.js"
let lines = input_data.split("\n");
for (let i = 0; i < lines.length; i++)
{
	lines[i] = JSON.parse(lines[i])
}

// part 1:
// let splitBreak
// let acc = lines.reduce((a, b) => {
// 	let tree = {};
// 	getTree([a, b], tree, 0)
// 	doExplode(tree)
// 	do {
// 		splitBreak = false;
// 		doSplit(tree)
// 		doExplode(tree)
// 	} while (splitBreak)

// 	let result = [];
// 	collect(tree, result)
// 	return result[0];
// })
// console.log(JSON.stringify(acc));
// console.log(magnitude(acc))

// part 2:
let max = 0;
let splitBreak;
for (let i = 0; i < lines.length - 1; i++)
{
	for (let j = i + 1; j < lines.length; j++)
	{
		let tree = {};
		getTree([lines[i], lines[j]], tree, 0)
		doExplode(tree)
		do {
			splitBreak = false;
			doSplit(tree)
			doExplode(tree)
		} while (splitBreak)

		let result = [];
		collect(tree, result)
		let mag = magnitude(result[0])
		if (mag > max) max = mag;

		tree = {};
		getTree([lines[j], lines[i]], tree, 0)
		doExplode(tree)
		do {
			splitBreak = false;
			doSplit(tree)
			doExplode(tree)
		} while (splitBreak)

		result = [];
		collect(tree, result)
		mag = magnitude(result[0])
		if (mag > max) max = mag;
	}
}
console.log(max)

//4584

function magnitude(node)
{
	let a = node[0]
	let b = node[1]

	if (Array.isArray(a))
	{
		a = magnitude(a);
	}
	if (Array.isArray(b))
	{
		b = magnitude(b)
	}

	return a * 3 + b * 2;
}

function collect(node, array)
{
	if (node.value === undefined)
	{
		let cell = [];
		array.push(cell);
		collect(node.l, cell)
		collect(node.r, cell)
	}
	else
	{
		array.push(node.value)
	}
}

function getTree(line, node, depth)
{
	depth++;

	let l = {};
	node.l = l;
	l.left = true;
	l.parent = node
	l.depth = depth

	let r = {};
	node.r = r;
	r.left = false;
	r.parent = node
	r.depth = depth

	let a = line[0]
	let b = line[1]

	if (Array.isArray(a))
	{
		l.value = undefined;
		getTree(a, l, depth);
	}
	else
	{
		l.value = a;
	}

	if (Array.isArray(b))
	{
		r.value = undefined;
		getTree(b, r, depth);
	}
	else
	{
		r.value = b;
	}
}


function doSplit(node)
{
	if (splitBreak) return;

	if (node.value >= 10)
	{
		splitBreak = true;
		let l = {};
		node.l = l;
		l.parent = node
		l.left = true;
		l.depth = node.depth + 1
		l.value = Math.floor(node.value / 2);

		let r = {};
		node.r = r;
		r.parent = node
		r.left = false;
		r.depth = node.depth + 1
		r.value = Math.ceil(node.value / 2);

		delete node.value;
	}
	else if (node.value === undefined)
	{
		doSplit(node.l)
		doSplit(node.r)
	}
}

function findAdjacent(node, l, r)
{
	let nextNode = node.parent
	// console.log(nextNode)
	if (nextNode.left)
	{
		while(nextNode.left === true)
		{
			nextNode = nextNode.parent
		}
		if (nextNode.parent !== undefined)
		{
			nextNode = nextNode.parent.l
			if (nextNode.value === undefined)
			{
				while(nextNode.r.value === undefined)
				{
					nextNode = nextNode.r;
				}
				nextNode.r.value += l;
			}
			else
			{
				nextNode.value += l;	
			}
		}
		nextNode = node.parent.parent.r
		if (nextNode.value === undefined)
		{
			while(nextNode.l.value === undefined)
			{
				nextNode = nextNode.l;
			}
			nextNode.l.value += r;
		}
		else
		{
			nextNode.value += r;
		}
	}
	else
	{
		while(nextNode.left === false)
		{
			nextNode = nextNode.parent
		}
		if (nextNode.parent !== undefined)
		{
			nextNode = nextNode.parent.r
			if (nextNode.value === undefined)
			{
				while(nextNode.l.value === undefined)
				{
					nextNode = nextNode.l;
				}
				nextNode.l.value += r;
			}
			else
			{
				nextNode.value += r;	
			}
		}
		nextNode = node.parent.parent.l
		if (nextNode.value === undefined)
		{
			while(nextNode.r.value === undefined)
			{
				nextNode = nextNode.r;
			}
			nextNode.r.value += l;
		}
		else
		{
			nextNode.value += l;
		}
	}
}

function doExplode(node)
{	
	if (node.value === undefined)
	{
		doExplode(node.l)
		doExplode(node.r)
	}
	else if (node.depth === 5 && !node.left)
	{
		let l = node.parent.l.value;
		let r = node.parent.r.value;
		findAdjacent(node, l, r)
		node.parent.value = 0;
		delete node.parent.l;
		delete node.parent.r;
	}
}