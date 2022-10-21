class ShootableObject extends DrawableObject {
  constructor(x, y) {
    super().loadImage('img/1.Sharkie/4.Attack/Bubble trap/Bubble.png');
    this.x = x;
    this.y = y;
    this.height = 35;
    this.width = 35;
    this.shoot();
  }

  shoot() {
    this.speedY = 1;
    setInterval(() => {
      this.x += 5;
      this.y += 0.05;
    }, 25);
    setTimeout(() => {
      this.applyUplift();
    }, 2000);
  }
}
