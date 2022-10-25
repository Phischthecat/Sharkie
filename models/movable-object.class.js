class MovableObject extends DrawableObject {
  //super klasse für alle beweglichen objekte
  speed = 0.15;
  otherDirection = false;
  energy = 100;
  lastHit = 0;
  isKilled = false;
  speedY = 0;
  acceleration = 0.05;
  attack = 0;

  offset_agressive = {};

  constructor() {
    super();
  }

  applyUplift() {
    setInterval(() => {
      this.y -= this.speedY;
      this.speedY += this.acceleration;
    }, 1000 / 60);
  }

  isColliding(mo) {
    return (
      this.x + this.width - this.offset.right > mo.x + mo.offset.left &&
      this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&
      this.x + this.offset.left < mo.x + mo.width - mo.offset.right &&
      this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom
    );
  }

  isInFrontOf(mo) {
    return (
      this.x + this.width - this.offset.right >
        mo.x - mo.offset_agressive.left &&
      this.y + this.height - this.offset.bottom >
        mo.y - mo.offset_agressive.top &&
      this.x + this.offset.left < mo.x + mo.width + mo.offset_agressive.right &&
      this.y + this.offset.top < mo.y + mo.height + mo.offset_agressive.bottom
    );
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
    setInterval(() => {
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
}
