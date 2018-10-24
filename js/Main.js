var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d')

// TODO
// 
// Collision
// Game over
// 
// Score

var paddleHeight = 10;
var paddleWidth = 30;
var paddleX = (canvas.width-paddleWidth)/2;
var rightPressed = false;
var leftPressed = false;

var lightBlue = new Ball(20, 10, 2, -3, 10, "#00c1cb")
var darkBlue1 = new Ball(10, 20, 4, 5, 10, "#2b4669")
var darkBlue2 = new Ball(8, 40, 2, 5, 10, "#2b4669")

var darkBlue3 = new Ball(20, 60, 2, 3, 10, "#2b4669")
var darkBlue4 = new Ball(12, 80, 2, 3, 10, "#2b4669")
var darkBlue5 = new Ball(90, 10, 2, 3, 10, "#2b4669")
var darkBlue6 = new Ball(100, 100, 2, 3, 10, "#2b4669")



var balls = [lightBlue, darkBlue1, darkBlue2, darkBlue3];

function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#00c1cb";
    ctx.fill();
    ctx.closePath();
}

function drawAndUpdate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for(i=0; i < balls.length; i++){
        balls[i].draw()
        balls[i].update() 
    }
    drawPaddle(); 
   

    
    if(rightPressed && paddleX < canvas.width-paddleWidth) {
        paddleX += 7;
    }
    else if(leftPressed && paddleX > 0) {
        paddleX -= 7;
    }

    //escuchadores de eventos
    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);

    function keyDownHandler(e) {
        if(e.keyCode == 39) {
            rightPressed = true;
        }
        else if(e.keyCode == 37) {
            leftPressed = true;
        }
    }
    
    function keyUpHandler(e) {
        if(e.keyCode == 39) {
            rightPressed = false;
        }
        else if(e.keyCode == 37) {
            leftPressed = false;
        }
    }
   
}
setInterval(drawAndUpdate, 10); 

// tarea para después: cambia el color de la bola a un color al azar, cada vez que golpea una pared.



//From here I start to edit



