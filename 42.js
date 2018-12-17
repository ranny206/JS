function Fib()
{
	var a = 1
	var b = 1
	for (var i =3; i<=10; i++)
	{
		a = a+b
		b = a-b
	}
	alert (a)

}

Fib()