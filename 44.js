function getRandom(min,max)
{
	return Math.floor(Math.random()*(max-min)+min)
}
function getArray(n)
{
	var a = []
	for (var i = 0; i<n; i++)
	{
		a.push(getRandom(0,100))
	}
	return a
}


function copy(source, start, end)
{
    var a = []
    for (var i = start; i <= end; i++)
        a.push(source[i])
    return a
}
function getResult (a) 
{
	a = a.sort((a, b) => b - a)

	b = []
	k = Math.sqrt(a.length)


	for (i = 0; i < a.length; i += k) 
	{ 
		var h = copy(a, i, i + k - 1) 

		if (i / k % 2 != 0)
	        h = h.reverse()

	    b.push(h); 
	}
	return b
}
console.log(getResult(getArray(4*4)))