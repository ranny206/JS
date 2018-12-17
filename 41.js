function AreaEllipse()
{
	var radiusX = parseInt(document.ellipseForm.RadiusX.value)
	var radiusY = parseInt(document.ellipseForm.RadiusY.value)

	var area = Math.PI * radiusX * radiusY;

	var r = "Area: " + area

	document.getElementById("result").innerText = r
	document.getElementById("result").style = "margin-top: 8px; border: 1px solid black; width: " + (r.length * 6) + "px;"
}
