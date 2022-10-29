class Character extends MovableObject {
  speed = 15;
  world;
  isPaused = false;
  collectedCoins = 0;
  collectedPoison = 100;
  offset = {
    top: 120,
    right: 40,
    bottom: 55,
    left: 35,
  };

  constructor() {
    super().loadImage(this.IMAGES_SWIM[0]);
    this.loadImages(this.IMAGES_SWIM);
    this.loadImages(this.IMAGES_IDLE);
    this.loadImages(this.IMAGES_BUBBLETRAP);
    this.loadImages(this.IMAGES_SLAP);
    this.loadImages(this.IMAGES_DEAD);
    this.loadImages(this.IMAGES_HURT_POISON);
    this.animate();
  }

  animate() {
    setInterval(() => {
      this.movingRight();
      this.movingLeft();
      this.movingTop();
      this.movingDown();
      this.world.camera_x = -this.x + 100;
    }, 1000 / 60);

    let character_animation = setInterval(() => {
      if (this.isDead()) {
        if (this.dead < this.IMAGES_DEAD.length - 1) {
          this.playAnimation(this.IMAGES_DEAD);
        } else {
          this.loadImage(this.IMAGES_DEAD[this.IMAGES_DEAD.length - 1]);
          clearInterval(character_animation);
        }
        this.dead++;
      } else if (this.isHurt()) {
        this.playAnimation(this.IMAGES_HURT_POISON);
      } else if (
        this.world.keyboard.RIGHT ||
        this.world.keyboard.LEFT ||
        this.world.keyboard.UP ||
        this.world.keyboard.DOWN
      ) {
        this.playAnimation(this.IMAGES_SWIM);
        sounds.swimming_sound.play();
      } else if (this.world.keyboard.SPACE || this.world.keyboard.E) {
        this.shootBubbles();
      } else if (this.world.keyboard.Q) {
        this.slapEnemy();
      } else {
        this.playAnimation(this.IMAGES_IDLE);
        this.isPaused = false;
        this.attack = 0;
      }
    }, 150);
  }

  movingLeft() {
    if (this.world.keyboard.LEFT && this.x > 0) {
      if (this.isCollidingCharacterWithBarrier('left')) {
        this.moveLeft();
        this.otherDirection = true;
      }
    }
  }

  movingRight() {
    if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
      if (this.isCollidingCharacterWithBarrier('right')) {
        this.moveRight();
        this.otherDirection = false;
      }
    }
  }

  movingTop() {
    if (this.world.keyboard.UP && this.y > -100) {
      if (this.isCollidingCharacterWithBarrier('top')) {
        this.moveUp();
      }
    }
  }

  movingDown() {
    if (this.world.keyboard.DOWN && this.y < 250) {
      if (this.isCollidingCharacterWithBarrier('bottom')) {
        this.moveDown();
      }
    }
  }

  isCollidingCharacterWithBarrier(side) {
    if (this.isCollidingWithBarrier(this.world.level.barriers[0]) != side) {
      return true;
    }
  }

  shootBubbles() {
    if (this.attack < 8) {
      this.playAnimation(this.IMAGES_BUBBLETRAP);
      this.attack++;
    } else {
      this.attack = 0;
    }
  }

  slapEnemy() {
    if (this.attack < this.IMAGES_SLAP.length) {
      this.playAnimation(this.IMAGES_SLAP);
      this.attack++;
    } else {
      this.attack = 0;
    }
  }

  collectCoin() {
    this.collectedCoins += 20;
    if (this.collectedCoins > 100) {
      this.collectedCoins = 100;
    }
  }
  collectPoison() {
    this.collectedPoison += 20;
    if (this.collectedPoison > 100) {
      this.collectedPoison = 100;
    }
  }

  IMAGES_SWIM = [
    '../img/1.Sharkie/3.Swim/1.png',
    '../img/1.Sharkie/3.Swim/2.png',
    '../img/1.Sharkie/3.Swim/3.png',
    '../img/1.Sharkie/3.Swim/4.png',
    '../img/1.Sharkie/3.Swim/5.png',
    '../img/1.Sharkie/3.Swim/6.png',
  ];

  IMAGES_IDLE = [
    'img/1.Sharkie/1.IDLE/1.png',
    'img/1.Sharkie/1.IDLE/2.png',
    'img/1.Sharkie/1.IDLE/3.png',
    'img/1.Sharkie/1.IDLE/4.png',
    'img/1.Sharkie/1.IDLE/5.png',
    'img/1.Sharkie/1.IDLE/6.png',
    'img/1.Sharkie/1.IDLE/7.png',
    'img/1.Sharkie/1.IDLE/8.png',
    'img/1.Sharkie/1.IDLE/9.png',
    'img/1.Sharkie/1.IDLE/10.png',
    'img/1.Sharkie/1.IDLE/11.png',
    'img/1.Sharkie/1.IDLE/12.png',
    'img/1.Sharkie/1.IDLE/13.png',
    'img/1.Sharkie/1.IDLE/14.png',
    'img/1.Sharkie/1.IDLE/15.png',
    'img/1.Sharkie/1.IDLE/16.png',
    'img/1.Sharkie/1.IDLE/17.png',
    'img/1.Sharkie/1.IDLE/18.png',
  ];

  IMAGES_LONG_IDLE = [
    'img/1.Sharkie/2.Long_IDLE/i1.png',
    'img/1.Sharkie/2.Long_IDLE/i2.png',
    'img/1.Sharkie/2.Long_IDLE/i3.png',
    'img/1.Sharkie/2.Long_IDLE/i4.png',
    'img/1.Sharkie/2.Long_IDLE/i5.png',
    'img/1.Sharkie/2.Long_IDLE/i6.png',
    'img/1.Sharkie/2.Long_IDLE/i7.png',
    'img/1.Sharkie/2.Long_IDLE/i8.png',
    'img/1.Sharkie/2.Long_IDLE/i9.png',
    'img/1.Sharkie/2.Long_IDLE/i10.png',
    'img/1.Sharkie/2.Long_IDLE/i11.png',
    'img/1.Sharkie/2.Long_IDLE/i12.png',
    'img/1.Sharkie/2.Long_IDLE/i13.png',
    'img/1.Sharkie/2.Long_IDLE/i14.png',
  ];

  IMAGES_BUBBLETRAP = [
    'img/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/1.png',
    'img/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/2.png',
    'img/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/3.png',
    'img/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/4.png',
    'img/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/5.png',
    'img/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/6.png',
    'img/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/7.png',
  ];

  IMAGES_SLAP = [
    'img/1.Sharkie/4.Attack/Fin slap/1.png',
    'img/1.Sharkie/4.Attack/Fin slap/4.png',
    'img/1.Sharkie/4.Attack/Fin slap/5.png',
    'img/1.Sharkie/4.Attack/Fin slap/6.png',
    'img/1.Sharkie/4.Attack/Fin slap/7.png',
    'img/1.Sharkie/4.Attack/Fin slap/8.png',
  ];

  IMAGES_DEAD = [
    'img/1.Sharkie/6.dead/1.Poisoned/1.png',
    'img/1.Sharkie/6.dead/1.Poisoned/2.png',
    'img/1.Sharkie/6.dead/1.Poisoned/3.png',
    'img/1.Sharkie/6.dead/1.Poisoned/4.png',
    'img/1.Sharkie/6.dead/1.Poisoned/5.png',
    'img/1.Sharkie/6.dead/1.Poisoned/6.png',
    'img/1.Sharkie/6.dead/1.Poisoned/7.png',
    'img/1.Sharkie/6.dead/1.Poisoned/8.png',
    'img/1.Sharkie/6.dead/1.Poisoned/9.png',
    'img/1.Sharkie/6.dead/1.Poisoned/10.png',
    'img/1.Sharkie/6.dead/1.Poisoned/11.png',
    'img/1.Sharkie/6.dead/1.Poisoned/12.png',
  ];

  IMAGES_HURT_POISON = [
    'img/1.Sharkie/5.Hurt/1.Poisoned/1.png',
    'img/1.Sharkie/5.Hurt/1.Poisoned/2.png',
    'img/1.Sharkie/5.Hurt/1.Poisoned/3.png',
    'img/1.Sharkie/5.Hurt/1.Poisoned/4.png',
    'img/1.Sharkie/5.Hurt/1.Poisoned/5.png',
  ];
}
