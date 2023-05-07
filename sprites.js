class Sprite {
	x = 0;
	y = 0;
	width = 0;
	height = 0;
	direction = 0;
	size = 1;
	show = true;
	costume = "";
	canLeaveScreen = false;
	
	moveSteps = function(stepCount) {
		this.x += Math.cos(this.direction);
		this.y += Math.sin(this.direction);
	};
	
	moveSteps = function(degrees) {
		this.direction -= degrees;
	};
	
	turnRight = function(degrees) {
		this.direction += degrees;
	};
	
	moveTo = function(newX,newY) {
		this.x = newX;
		this.y = newY;
	};
	
	setDir = function(newDeg) {
		this.direction = newDeg;
	};
	
	draw = function() {
		drawImg(this.costume,this.x,this.y);
	};
}