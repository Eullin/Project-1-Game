/* var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d')
var ballRadius = 10; */


class Balls {
    constructor(){
    this.x = canvas.width/2;  
    this.y = canvas.height-30;
    this.dx = 2;
    this.dy = -2;
    this.quantity = 6; 
    this.colors = ["blue", "yello"];
    }
    
    draw(){
      ctx.beginPath();
      ctx.arc(this.x, this.y, ballRadius, 0, Math.PI*2);
      ctx.fillStyle = "green";
      ctx.fill();
      ctx.closePath();
    }
    
  
    update(){
    if(this.y + this.dy > canvas.height || this.y + this.dy < 0) {
        this.dy = -this.dy 
    } 
  
    if(this.x + this.dx > canvas.width || this.x + this.dx < 0){
        this.dx = -this.dx
    }
  
    if(this.x + this.dx > canvas.width-ballRadius || this.x + this.dx < ballRadius) {
        this.dx = -this.dx;
    }
  
    if(this.y + this.dy > canvas.height-ballRadius || this.y + this.dy < ballRadius) {
        this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dx;
    this.draw();
    this.update();
    }
  }
  
  function animate(){
      requestAnimationFrame(animate);
      ctx.clearRect(0,0,innerWidth,innerHeight)
  };
   
  
  
  