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

  /**
   * moves the generated bubble
   */
  shoot() {
    this.speedY = 1;
    if (!world.character.otherDirection) {
      setStoppableInterval(() => {
        this.x += 5;
        this.y -= 0.1;
      }, 25);
    } else {
      setStoppableInterval(() => {
        this.x -= 5;
        this.y += 0.1;
      }, 25);
    }
    setTimeout(() => {
      this.applyUplift();
    }, 1500);
  }

  /**
   * changes the bubble color to poison bubble
   */
  changeToPoisonBubble() {
    if (world.statusBar[2].percentage == 100) {
      this.loadImage(
        'img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png'
      );
    }
  }
}
