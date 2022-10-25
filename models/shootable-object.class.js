class ShootableObject extends MovableObject {
  constructor(x, y) {
    super().loadImage('img/1.Sharkie/4.Attack/Bubble trap/Bubble.png');
    this.x = x;
    this.y = y;
    this.height = 35;
    this.width = 35;
    this.shoot();
    this.changeToPoisonBubble();
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

  changeToPoisonBubble() {
    if (world.statusBar[2].percentage == 100) {
      this.loadImage(
        'img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png'
      );
    }
  }
}
