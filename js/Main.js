var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d')

// TODO
// Add the function to start the 
// Game over



var paddleHeight = 20;
var paddleWidth = 100;
var score = 0;
var life = 3; 
var paddleX = (canvas.width-paddleWidth)/2;
var paddleY = canvas.height-paddleHeight;
var rightPressed = false;
var leftPressed = false;

var lightBlue = new Ball(20, 20, 3, 6, 17, "#00c1cb")

var darkBlue1 = new Ball(400, 100, 4, 4, 17, "#2b4669")
var darkBlue2 = new Ball(600, 80, 3, 4, 17, "#2b4669")
var darkBlue3 = new Ball(700, 90, 2, 4, 17, "#2b4669")


var darkBlue4 = new Ball(500, 80, 4, 4, 17, "#2b4669")
var darkBlue5 = new Ball(200, 10, 4, 4, 17, "#2b4669")
var darkBlue6 = new Ball(200, 100, 4, 4, 17, "#2b4669") 

var balls = [lightBlue, darkBlue1, darkBlue2, darkBlue3];

function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, paddleY, paddleWidth, paddleHeight);
    ctx.fillStyle = "#00c1cb";
    ctx.fill();
    ctx.closePath();
}

function drawScore() {
    ctx.fillStyle = "black"
    ctx.font = "20px sans-serif"
    ctx.fillText("Score: "+score, 0, 20)
}
function drawLife() {
    ctx.fillStyle = "black"
    ctx.font = "20px sans-serif"
    ctx.fillText("Life: "+life, 0, 60)
}
function drawAndUpdate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for(var i=0; i < balls.length; i++){
        balls[i].draw()
        balls[i].update() 
    }
    drawPaddle(); 
    drawScore();
    drawLife();
       
    if(rightPressed && paddleX < canvas.width-paddleWidth) {
        paddleX += 14;
    }
    else if(leftPressed && paddleX > 0) {
        paddleX -= 14;
    }

    // Check collision
    for(var i=0; i < balls.length; i++){
        // check collision
        if (
            balls[i].bottom() >= paddleY &&
            balls[i].top() <= paddleY+paddleHeight &&
            balls[i].right() >= paddleX &&
            balls[i].left() <= paddleX+paddleWidth &&
            balls[i].color === "#00c1cb"
        ) {
            score++
            balls[i].y = paddleY - balls[i].radius
            balls[i].dy *= -1

         } else if (
            balls[i].bottom() >= paddleY &&
            balls[i].top() <= paddleY+paddleHeight &&
            balls[i].right() >= paddleX &&
            balls[i].left() <= paddleX+paddleWidth &&     
            balls[i].color === "#2b4669"
         ){
            //  if (life <= 0){
            //      alert("game over")
            //  } else {
            //      life --  
            //  }
            
             life <= 0 ? gameover() : life -- 

            balls[i].y = paddleY - balls[i].radius
            balls[i].dy *= -1
        } 
    }
    function gameover (){
        clearInterval(gameInterval)

       console.log("game over")
    }
    // var auido = new Audio("")
    // Audio.play();
    // Audio.pause();
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

// When you click on start, you should execute the code below
var gameInterval = setInterval(drawAndUpdate, 10); 
// tarea para después: cambia el color de la bola a un color al azar, cada vez que golpea una pared.



//From here I start to edit



