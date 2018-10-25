class Ball {
    constructor(x, y, dx, dy, radius, color){
    this.x = x;  
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = color;
    }
    top() {
        return this.y - this.radius
    }
    bottom() {
        return this.y + this.radius
    }
    left() {
        return this.x - this.radius
    }
    right() {
        return this.x + this.radius
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

        if(this.y + this.radius > canvas.height || this.y - this.radius < 0) {
            this.dy = -this.dy 
        } 
    
        if(this.x + this.radius > canvas.width || this.x - this.radius <= 0){
            this.dx = -this.dx
        }
    
    }

  animate(){
      requestAnimationFrame(animate);
      ctx.clearRect(0,0,innerWidth,innerHeight)
  };
   
}
  
  