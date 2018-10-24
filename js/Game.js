class Game {
    constructor() {
      this.score = 0;
      this.life = 3;
      this.speed = 0;
      this.currentColor = "";
    } 
  
    gameOver() {
      if (this.life < 1) {
        console.log("you lost");
        return true;
      } else {
        return false;
      }
    }
  
    checkIfColor(ball) {
      if (ball.colors === this.currentColor) {
        return true;
      } else {
        return false;
      }
    }
  
    winner() {
      if (this.score === 30) {
        return true;
      } else {
        return false;
      }
    }
  
    increaseSpeed() {
      if (this.score >= 15) {
        this.speed++;
      } else {
        this.speed = this.speed;
      }
    }
  
    update() {
      myGameArea.clear();
      myGamePiece.update();
    }
  
    draw() {}
  }
  
  