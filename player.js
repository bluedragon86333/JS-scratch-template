class Player extends Sprite {
	function keyInput() {
		if (key.up) {
			this.y -= yv;
		}
		if (key.down) {
			this.y += yv;
		}
		if (key.right) {
			this.x += xv;
		}
		if (key.left) {
			this.x -= xv;
		}
	}
	
	
	
	function process() {
		this.keyInput();
		this.checkBounds();
	}
}