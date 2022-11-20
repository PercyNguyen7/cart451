// ChaserClown
//
// A class defining a clown displayed as an image that can chase another clown!
class UserCursor {

    // constructor(x, y, acceleration, clownImage)
    // Sets up the basic properties for movement and displaying
    constructor(x, y, acceleration, maxSpeed) {
      this.x = x;
      this.y = y;
      this.width = 200;
      this.height = 200;
      this.vx = 0;
      this.vy = 0;
      this.ax = 0;
      this.ay = 0;
      this.acceleration = acceleration;
      // this.acceleration = acceleration;
      this.maxSpeed = maxSpeed;
    //   this.image = clownImage;
    }
  
    // chase(chased)
    // Sets velocity to move towards the position of the provided "chased" clown
    chase() {
      // Determine the distance between the two
      let dx = this.x - mouseX;
      let dy = this.y - mouseY;
  
      // If x distance is negative, the chaser should move right
      if (dx < 0) {
        this.ax = this.acceleration;
      }
      
      // If x distance positive the chaser should move left
      else {
        this.ax = -this.acceleration;
      }
  
      // If y distance is negative, the chaser should move up
      if (dy < 0) {
        this.ay = this.acceleration;
      }
      // If y distance is positive, the chaser should move down
      else {
        this.ay = -this.acceleration;
      }
      
    }
  
    // move()
    // Updates the position with the velocity
    move() {
      this.vx += this.ax;
      this.vx = constrain(this.vx, -this.maxSpeed, this.maxSpeed);
      this.vy += this.ay;
      this.vy = constrain(this.vy, -this.maxSpeed, this.maxSpeed);

      this.x += this.vx;
      this.y += this.vy;
    }
  
    // display()
    // Displays the image of this clown at its position
    display() {
      push();
      imageMode(CENTER);
      noStroke();
      fill('rgba(255,255,255, 0.08)');
      ellipse(this.x, this.y, this.width, this.height);
      pop();
    }

  }