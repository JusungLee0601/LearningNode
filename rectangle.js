module.exports =  function (x, y, callback)  {
	if (x <= 0 || y<= 0) {
		setTimeout(function () {
			callback(new Error("Incorrect dimensions")),
			null
		}
		, 2000);
	} else {
		setTimeout(function () {
			callback(null,
			{
				perimeter: function () {
					return 2 * (x + y)
				},
				area:  function () {
					return (x * y)
				}
			})
		}
		, 2000);
	}
}
