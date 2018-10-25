// TODO
// Add the function to start the
// Game over


$("#play-again").hide();
$("#gameover").hide("slow");
var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");

var paddleHeight = 20;
var paddleWidth = 100;
var score = 0;
var life = 3;
var paddleX = (canvas.width - paddleWidth) / 2;
var paddleY = canvas.height - paddleHeight;
var rightPressed = false;
var leftPressed = false;
var audio;
var audioLose;

var lightBlue = new Ball(20, 20, 3, 6, 17, "#00c1cb");
var darkBlue1 = new Ball(400, 100, 4, 4, 17, "#2b4669");
var darkBlue2 = new Ball(600, 80, 3, 4, 17, "#2b4669");
var darkBlue3 = new Ball(700, 90, 2, 4, 17, "#2b4669");
var darkBlue4 = new Ball(500, 80, 4, 4, 17, "#2b4669");
var darkBlue5 = new Ball(200, 10, 4, 4, 17, "#2b4669");
var darkBlue6 = new Ball(200, 100, 4, 4, 17, "#2b4669");

var balls = [lightBlue, darkBlue1, darkBlue2, darkBlue3];

function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, paddleY, paddleWidth, paddleHeight);
  ctx.fillStyle = "#00c1cb";
  ctx.fill();
  ctx.closePath();
}

/* function drawHighScore(){
    getHighScores();
} */

function drawScore() {
  ctx.fillStyle = "#2b4669";
  ctx.stroke = "2";
  ctx.font = "20px arial";
  ctx.fillText("SCORE: " + score, 80, 80, 100);
}
function drawLife() {
  ctx.fillStyle = "#2b4669";
  ctx.font = "20px sans-serif";
  ctx.fillText("LIFE: " + life, 80, 110, 600);
}
function drawAndUpdate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (var i = 0; i < balls.length; i++) {
    balls[i].draw();
    balls[i].update();
  }
  drawPaddle();
  drawScore();
  drawLife();
//  drawHighScore();

  if (rightPressed && paddleX < canvas.width - paddleWidth) {
    paddleX += 14;
  } else if (leftPressed && paddleX > 0) {
    paddleX -= 14;
  }

  // Check collision
  for (var i = 0; i < balls.length; i++) {
    // check collision
    if (
      balls[i].bottom() >= paddleY &&
      balls[i].top() <= paddleY + paddleHeight &&
      balls[i].right() >= paddleX &&
      balls[i].left() <= paddleX + paddleWidth &&
      balls[i].color === "#00c1cb"
    ) {
      score++;
      var audio = new Sound("../sound/positive sound.mp3");
      audio.play();
      console.log(audio);
      balls[i].y = paddleY - balls[i].radius;
      balls[i].dy *= -1;
    } else if (
      balls[i].bottom() >= paddleY &&
      balls[i].top() <= paddleY + paddleHeight &&
      balls[i].right() >= paddleX &&
      balls[i].left() <= paddleX + paddleWidth &&
      balls[i].color === "#2b4669"
    ) {
        var audio = new Sound("../sound/zapsplat_multimedia_game_zap_laser_005_24950.mp3");
        audio.play();
      if (life <= 0) {
        ctx.font = "100px Arial";
     
        $("#play-again").show();
        clearInterval(gameInterval);

        setTimeout(() => {}, 1000);
      } else {
        life--;
      }

      balls[i].y = paddleY - balls[i].radius;
      balls[i].dy *= -1;
    }
  }
  // function gameover (){
  //     // $("#gameover").show(100)

  //     console.log("game over")
  // }


  //escuchadores de eventos
  document.addEventListener("keydown", keyDownHandler, false);
  document.addEventListener("keyup", keyUpHandler, false);

  function keyDownHandler(e) {
    if (e.keyCode == 39) {
      rightPressed = true;
    } else if (e.keyCode == 37) {
      leftPressed = true;
    }
  }

  function keyUpHandler(e) {
    if (e.keyCode == 39) {
      rightPressed = false;
    } else if (e.keyCode == 37) {
      leftPressed = false;
    }
  }
}

// When you click on start, you should execute the code below
var gameInterval;
// var gameInterval = setInterval(drawAndUpdate, 10);
// tarea para después: cambia el color de la bola a un color al azar, cada vez que golpea una pared.

$(document).ready(function() {
  $("#play").click(function() {
    console.log("click");
    $("#play").hide();
    $("#play-again").hide();
    gameInterval = setInterval(drawAndUpdate, 10);
  });
  $("#play-again").click(function() {
    gameInterval = setInterval(drawAndUpdate, 10);
    $("#play-again").hide();
    life = 3;
  });
});



