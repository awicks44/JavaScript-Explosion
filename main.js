(() => {

	var a = 1;
	var b = a++;
	console.log(b);

	var width = window.innerWidth;
	var height = window.innerHeight;

	var x = width / 2;
	var y = height / 2;

	var canvas = document.querySelector('#canvas');
	canvas.width = width;
	canvas.height = height;

	var context = canvas.getContext('2d');

	let circles = [];
	const totalCircles = 50;

	for (let i = 0; i < totalCircles; i++) 
	{
		const circle = new Circle(x, height * .25, Math.random() * 5 + 2, Math.random() * Math.PI * 2, .1);	
		circles.push(circle);
	}

	

	generateCircle();


	function generateCircle() 
	{
		context.clearRect(0, 0, width, height);

		for (let i = 0; i < totalCircles; i++)
		{
			const circle = circles[i];
			circle.move();
			context.fillStyle = circle.color;
			context.beginPath();
			context.arc(circle.position.getX(), circle.position.getY(), 10, 0, 2 * Math.PI);
			context.fill();	
		}		

		requestAnimationFrame(generateCircle);
	}

})()