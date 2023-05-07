const framerate = 30;

const canvas = document.getElementById('game-canvas'); 
var context = canvas.getContext('2d');


var player = new Player();




function init() {
	
	player.moveTo(100,50);
	player.width = 32;
	player.costume = "onion";
	player.height = 44;
}


function process() {
	player.process();
}


function draw() {
	context.clearRect(0, 0, 256,192);
	drawImg("onion",0,0);
	player.draw();
}

var mainloop = setInterval(function() {
	
	draw();
	process();
	
	if (1 == 0) {
		clearInterval(mainloop);
	}
},1000 / framerate);