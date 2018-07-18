function move(){
    if (keyIsDown(LEFT_ARROW)) {
		player1.x += -player1.speed;
	} else if (keyIsDown(RIGHT_ARROW)) {
		player1.x += player1.speed;
	} else if (keyIsDown(UP_ARROW)) {
		player1.y += -player1.speed;
	} else if (keyIsDown(DOWN_ARROW)) {
		player1.y += player1.speed;
	}
}
function drawplayer(){
    // DRAW
	background(140, 197, 66);
	
	// Draw Player 1
	fill(player1.col);
	noStroke();
	ellipse(player1.x, player1.y, 2 * player1.r);
}
function init1(){
    player1 = {
		x: width / 2, 
		y: height / 2,
		r: 15,
		speed: 5,
		col: 80
	};
}
function teleport(){
    if (keyCode == 32){ 
        player1.x = random(width)
        player1.y = random(height)
    }
}
function wrap(){
    if (player1.x > width){
        player1.x = 0 + player1.r
    } else if (player1.x < 0){
        player1.x = width - player1.r
    } else if (player1.y > height){
        player1.y = 0 + player1.r
    } else if (player1.y < 0){
        player1.y = height - player1.r
    }
}