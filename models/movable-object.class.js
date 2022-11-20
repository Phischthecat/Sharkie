class MovableObject extends DrawableObject {
  //super klasse für alle beweglichen objekte
  world;
  speed = 0.15;
  otherDirection = false;
  energy = 100;
  lastHit = 0;
  isKilled = false;
  speedY = 0;
  acceleration = 0.05;
  attack = 0;
  dead = 0;

  constructor() {
    super();
  }

  applyUplift() {
    setStoppableInterval(() => {
      this.y -= this.speedY;
      this.speedY += this.acceleration;
    }, 1000 / 60);
  }

  isColliding(mo) {
    return (
      this.x + this.width - this.offset.right > mo.x + mo.offset.left && // => right > left
      this.y + this.height - this.offset.bottom > mo.y + mo.offset.top && // => top > bottom
      this.x + this.offset.left < mo.x + mo.width - mo.offset.right && // => left < right
      this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom // => top < bottom
    );
  }

  isInFrontOf(mo, offset_top, offset_right, offset_bottom, offset_left) {
    return (
      this.x + this.width - this.offset.right > mo.x - offset_left &&
      this.y + this.height - this.offset.bottom > mo.y - offset_top &&
      this.x + this.offset.left < mo.x + mo.width + offset_right &&
      this.y + this.offset.top < mo.y + mo.height + offset_bottom
    );
  }

  isCollidingWithBarrier(barrier) {
    if (this.isColliding(barrier)) {
      if (this.depthX(barrier) != 0 && this.depthY(barrier) != 0) {
        // having the depth, pick the smaller depth and move along that axis
        if (Math.abs(this.depthX(barrier)) < Math.abs(this.depthY(barrier))) {
          if (this.depthX(barrier) > 0) return 'left'; // Collision along the X-axis...
          return 'right';
        } else {
          if (this.depthY(barrier) > 0) return 'top'; // Collision along the Y-axis...
          return 'bottom';
        }
      }
    } else {
      return null;
    }
  }

  hit(hitPoints) {
    this.energy -= hitPoints;
    if (this.energy < 0) {
      this.energy = 0;
    } else {
      this.lastHit = new Date().getTime();
    }
  }

  isHurt() {
    let timePassed = new Date().getTime() - this.lastHit; // Difference in ms
    timePassed = timePassed / 1000; //Difference in s
    return timePassed < 1.2;
  }

  changeDirection(time) {
    setStoppableInterval(() => {
      this.otherDirection = !this.otherDirection;
    }, time);
  }

  isDead() {
    return this.energy == 0;
  }

  moveRight() {
    this.x += this.speed;
  }

  moveLeft() {
    this.x -= this.speed;
  }

  moveUp() {
    this.y -= this.speed;
  }

  moveDown() {
    this.y += this.speed;
  }

  diffX(barrier) {
    return this.centerX() - barrier.centerX();
  }

  centerX() {
    // Calculate the distance between centers
    return this.x + this.width / 2 - this.offset.right;
  }

  diffY(barrier) {
    return this.centerY() - barrier.centerY();
  }

  centerY() {
    // Calculate the distance between centers
    return this.y + this.height / 2 - this.offset.bottom;
  }

  minDistX(barrier) {
    // Calculate the minimum distance to X
    return this.width / 2 - this.offset.right + barrier.width / 2;
  }
  minDistY(barrier) {
    // Calculate the minimum distance to Y
    return this.height / 6 - this.offset.bottom + barrier.height / 2;
  }

  depthX(barrier) {
    // Calculate the depth of collision for the X axis
    return this.diffX(barrier) > 0
      ? this.minDistX(barrier) - this.diffX(barrier)
      : -this.minDistX(barrier) - this.diffX(barrier);
  }

  depthY(barrier) {
    // Calculate the depth of collision for the Y axis
    return this.diffY(barrier) > 0
      ? this.minDistY(barrier) - this.diffY(barrier)
      : -this.minDistY(barrier) - this.diffY(barrier);
  }
}
