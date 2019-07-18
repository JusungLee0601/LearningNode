var rect = require('./rectangle');

function solveRect (l,b) {
	console.log("Solving for rectangle with l = " + l + "and b = " + b);

	rect(l, b, (err, rectangle) => {
		if (err) {
			console.log("Error: ", err.message);
		} else {
			console.log("Area: " + rectangle.area());
			console.log("Perimeter: " + rectangle.perimeter());
		}
	});

	console.log("After rect() call");
}

solveRect(2, 4);
solveRect(2, 0);