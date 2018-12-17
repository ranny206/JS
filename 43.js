function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
var m =[]
for (var i = 0; i<=3;i++)
{
	m.push([])
	for (var j = 0; j<=2;j++)
	{
		m[i].push(getRandomInt(0,100))
	}
}

console.log(m.slice())

for (var i = 1; i<=3; i++)
	m[i] = m[i].map((value, index) => (value - m[0][index]))

console.log(m)
