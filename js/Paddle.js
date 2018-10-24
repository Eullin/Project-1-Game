/* class Paddle {
    constructor(paddleWidth, paddleHeight, paddleX, rightPressed, leftPressed){
    this.paddleWidth= 10;
    this.paddleHeight=50;
    this.paddleX=(canvas.width-paddleWidth)/2;
    this.rightPressed = false; 
    this.leftPressed= false; 
    }
    drawPaddle() {
        ctx.beginPath();
        ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
        ctx.fillStyle = "#00c1cb";
        ctx.fill();
        ctx.closePath();
    }

    if(rightPressed && paddleX < canvas.width-paddleWidth) {
        paddleX += 7;
    } else if(leftPressed && paddleX > 0) {
        paddleX -= 7;
    }
}





 */