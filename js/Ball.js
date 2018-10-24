/* var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d')
var ballRadius = 10; */


class Ball {
    constructor(x, y, dx, dy, radius, color){
    this.x = x;  
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = color;
    }
    
    draw(){
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2);
      ctx.fillStyle = this.color;
      ctx.fill();
      ctx.closePath();
    }
    
  
    update(){
        this.x += this.dx;
        this.y += this.dy;

        if(this.y + this.dy > canvas.height || this.y + this.dy < 0) {
            this.dy = -this.dy 
        } 
    
        if(this.x + this.dx > canvas.width || this.x + this.dx < 0){
            this.dx = -this.dx
        }
    
        if(this.x + this.dx > canvas.width-this.radius || this.x + this.dx < this.radius) {
            this.dx = -this.dx;
        }
    
        if(this.y + this.dy > canvas.height-this.radius || this.y + this.dy < this.radius) {
            this.dy = -this.dy;
        }
    }

  animate(){
      requestAnimationFrame(animate);
      ctx.clearRect(0,0,innerWidth,innerHeight)
  };
   
}
  
  