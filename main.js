const framerate = 30;

var player = new Sprite();




function init() {
	
	player.moveTo(100,50);
	player.width = 32;
	player.costume = "onion";
	player.height = 44;
}


function process() {
	if (key.up) {
		player.y -= 2;
	}
	if (key.down) {
		player.y += 2;
	}
	if (key.right) {
		player.x += 2;
	}
	if (key.left) {
		player.x -= 2;
	}
}


function draw() {

	drawImg("onion",0,0);
	player.draw();
}

var mainloop = setInterval(function() {
	context.clearRect(0, 0, 256,192);
	process();
	draw();
	if (1 == 0) {
		clearInterval(mainloop);
	}
},1000 / framerate);