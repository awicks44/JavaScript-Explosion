function Vector (x, y) 
{
	this.x = x;
	this.y = y;
}

Vector.prototype.getX = function() 
{
	return this.x;
}

Vector.prototype.getY = function() 
{
	return this.y;
}

Vector.prototype.addTo = function(otherVector) 
{
	this.x += otherVector.getX();
	this.y += otherVector.getY();
}

Vector.prototype.subtractFrom = function(otherVector) 
{
	this.x -= otherVector.getX();
	this.y -= otherVector.getY();
}

Vector.prototype.setLength = function(length)
{
	const angle = this.getAngle();

	this.x = Math.cos(angle) * length;
	this.y = Math.sin(angle) * length;
}

Vector.prototype.setAngle = function(angle)
{
	const length = this.getLength();

	this.x = Math.cos(angle) * length;
	this.y = Math.sin(angle) * length;
}

Vector.prototype.getAngle = function() 
{
	return Math.atan2(this.y, this.x);
}

Vector.prototype.getLength = function()
{
	return Math.sqrt(this.x * this.x + this.y * this.y);
}


function Circle(startPosX, startPosY, magnitude, direction, gravity)
{
	this.position = new Vector(startPosX, startPosY);	
	this.velocity = new Vector(0, 0);
	this.velocity.setLength(magnitude);
	this.velocity.setAngle(direction);
	this.gravity = new Vector(0, gravity);
	this.color = '#' + Math.floor(Math.random() * 16777215).toString(16);
}

Circle.prototype.move = function () 
{
	this.velocity.addTo(this.gravity);
	this.position.addTo(this.velocity);
}
