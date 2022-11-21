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

  /**
   * symolises the buoyancy
   */
  applyUplift() {
    setStoppableInterval(() => {
      this.y -= this.speedY;
      this.speedY += this.acceleration;
    }, 1000 / 60);
  }

  /**
   * checks whether an object collides with another object
   * @param {object} mo the movable, collided object
   * @returns boolean
   */
  isColliding(mo) {
    return (
      this.x + this.width - this.offset.right > mo.x + mo.offset.left && // => right > left
      this.y + this.height - this.offset.bottom > mo.y + mo.offset.top && // => top > bottom
      this.x + this.offset.left < mo.x + mo.width - mo.offset.right && // => left < right
      this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom // => top < bottom
    );
  }

  /**
   * checks if an object is in front of another object
   * @param {object} mo the movable object in front of
   * @param {number} offset_top from mo an offset for the top
   * @param {number} offset_right for mo an offset for the right
   * @param {number} offset_bottom for mo an offset for the bottom
   * @param {number} offset_left for mo an offset for the left
   * @returns boolean
   */
  isInFrontOf(mo, offset_top, offset_right, offset_bottom, offset_left) {
    return (
      this.x + this.width - this.offset.right > mo.x - offset_left &&
      this.y + this.height - this.offset.bottom > mo.y - offset_top &&
      this.x + this.offset.left < mo.x + mo.width + offset_right &&
      this.y + this.offset.top < mo.y + mo.height + offset_bottom
    );
  }

  /**
   * check if an object is colliding with the barrier
   * @param {object} barrier a barrier object for the level
   * @returns boolean
   */
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

  /**
   * if an object is hitted, it looses the amount of hit points as energy
   * @param {number} hitPoints indicates the amount of hit points
   */
  hit(hitPoints) {
    this.energy -= hitPoints;
    if (this.energy < 0) {
      this.energy = 0;
    } else {
      this.lastHit = new Date().getTime();
    }
  }

  /**
   * checks whether an object is violated and runs a timer
   * @returns boolean
   */
  isHurt() {
    let timePassed = new Date().getTime() - this.lastHit; // Difference in ms
    timePassed = timePassed / 1000; //Difference in s
    return timePassed < 1.2;
  }

  /**
   * changes the moving direction of an object by time
   * @param {number} time time of the interval. triggers the funktion.
   */
  changeDirection(time) {
    setStoppableInterval(() => {
      this.otherDirection = !this.otherDirection;
    }, time);
  }

  /**
   * checks if an object is dead (energy at 0)
   * @returns boolean
   */
  isDead() {
    return this.energy == 0;
  }

  /**
   * moves an object to the Right
   */
  moveRight() {
    this.x += this.speed;
  }

  /**
   * moves an object to the Left
   */
  moveLeft() {
    this.x -= this.speed;
  }

  /**
   * moves an object to the Top
   */
  moveUp() {
    this.y -= this.speed;
  }

  /**
   * moves an object to the Bottom
   */
  moveDown() {
    this.y += this.speed;
  }

  /**
   * calculates the distance on the x axis from the centre of an object to the centre of the barrier
   * @param {object} barrier
   * @returns boolean
   */
  diffX(barrier) {
    return this.centerX() - barrier.centerX();
  }

  /**
   * calculates the centre on the x axis of an object
   * @returns boolean
   */
  centerX() {
    return this.x + this.width / 2 - this.offset.right;
  }

  /**
   * Calculates the distance on the y axis from the centre of an object to the centre of the barrier.
   * @param {object} barrier
   * @returns boolean
   */
  diffY(barrier) {
    return this.centerY() - barrier.centerY();
  }

  /**
   * calculates the centre on the y axis of an object
   * @returns boolean
   */
  centerY() {
    return this.y + this.height / 2 - this.offset.bottom;
  }

  /**
   * calculates the minimum distance on the x axis to a barrier
   * @param {object} barrier
   * @returns boolean
   */
  minDistX(barrier) {
    return this.width / 2 - this.offset.right + barrier.width / 2;
  }

  /**
   * calculates the minimum distance on the y axis to a barrier
   * @param {object} barrier
   * @returns boolean
   */
  minDistY(barrier) {
    // Calculate the minimum distance to Y
    return this.height / 6 - this.offset.bottom + barrier.height / 2;
  }

  /**
   * calculates the depth of collision for the X axis
   * @param {object} barrier
   * @returns boolean
   */
  depthX(barrier) {
    return this.diffX(barrier) > 0
      ? this.minDistX(barrier) - this.diffX(barrier)
      : -this.minDistX(barrier) - this.diffX(barrier);
  }

  /**
   * calculate the depth of collision for the Y axis
   * @param {object} barrier
   * @returns boolean
   */
  depthY(barrier) {
    return this.diffY(barrier) > 0
      ? this.minDistY(barrier) - this.diffY(barrier)
      : -this.minDistY(barrier) - this.diffY(barrier);
  }
}
