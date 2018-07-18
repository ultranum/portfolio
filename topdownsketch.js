// TOP DOWN PLAYER

// Declare Global Variables
let player1;

// SETUP FUNCTION - Runs once at beginning of program
function setup() {
	createCanvas(800, 600);
	
	// Initialize Global Variables
	init1()
}

// DRAW FUNCTION - Loops @ 60FPS by default
function draw() {
  	// LOGIC
	// Player 1 Movement
	document.addEventListener('keypress', teleport)
	move()
	drawplayer()
	wrap()
}
