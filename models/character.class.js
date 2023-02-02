class Character extends MovableObject {
  IMAGES_SWIM = [
    'img/1.Sharkie/3.Swim/1.png',
    'img/1.Sharkie/3.Swim/2.png',
    'img/1.Sharkie/3.Swim/3.png',
    'img/1.Sharkie/3.Swim/4.png',
    'img/1.Sharkie/3.Swim/5.png',
    'img/1.Sharkie/3.Swim/6.png',
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

  IMAGES_DEAD_ELECTRO = [
    'img/1.Sharkie/6.dead/2.Electro_shock/1.png',
    'img/1.Sharkie/6.dead/2.Electro_shock/2.png',
    'img/1.Sharkie/6.dead/2.Electro_shock/3.png',
    'img/1.Sharkie/6.dead/2.Electro_shock/4.png',
    'img/1.Sharkie/6.dead/2.Electro_shock/5.png',
    'img/1.Sharkie/6.dead/2.Electro_shock/6.png',
    'img/1.Sharkie/6.dead/2.Electro_shock/7.png',
    'img/1.Sharkie/6.dead/2.Electro_shock/8.png',
    'img/1.Sharkie/6.dead/2.Electro_shock/9.png',
    'img/1.Sharkie/6.dead/2.Electro_shock/10.png',
  ];

  IMAGES_HURT_POISON = [
    'img/1.Sharkie/5.Hurt/1.Poisoned/1.png',
    'img/1.Sharkie/5.Hurt/1.Poisoned/2.png',
    'img/1.Sharkie/5.Hurt/1.Poisoned/3.png',
    'img/1.Sharkie/5.Hurt/1.Poisoned/4.png',
    'img/1.Sharkie/5.Hurt/1.Poisoned/5.png',
  ];
  IMAGES_HURT_ELECTRO = [
    'img/1.Sharkie/5.Hurt/2.Electric shock/1.png',
    'img/1.Sharkie/5.Hurt/2.Electric shock/2.png',
    'img/1.Sharkie/5.Hurt/2.Electric shock/3.png',
  ];
  speed = 5;
  world;
  isPaused = false;
  collectedCoins = 0;
  collectedPoison = 0;
  electroHit = false;
  shoot = false;
  slap = false;
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
    this.loadImages(this.IMAGES_DEAD_ELECTRO);
    this.loadImages(this.IMAGES_HURT_POISON);
    this.loadImages(this.IMAGES_HURT_ELECTRO);
    this.animate();
  }

  /**
   * animates the character
   */
  animate() {
    this.moving();
    this.attacking();

    setStoppableInterval(() => {
      if (this.isDead()) {
        this.isDying();
      } else if (this.isHurt()) {
        this.isInjured();
      } else if (
        this.world.keyboard.RIGHT ||
        this.world.keyboard.LEFT ||
        this.world.keyboard.UP ||
        this.world.keyboard.DOWN
      ) {
        this.playAnimation(this.IMAGES_SWIM);
        sounds.swimming.play();
      } else if (this.world.keyboard.SPACE) {
        this.shoot = true;
      } else if (this.world.keyboard.D) {
        this.slap = true;
      } else if (!this.shoot && !this.slap) {
        this.playAnimation(this.IMAGES_IDLE);
        this.isPaused = false;
        this.electroHit = false;
      }
    }, 150);
  }

  /**
   * movement of the character
   */
  moving() {
    setStoppableInterval(() => {
      if (!this.isDead()) {
        this.movingRight();
        this.movingLeft();
        this.movingTop();
        this.movingDown();
      }
      this.world.camera_x = -this.x + 100;
    }, 1000 / 60);
  }

  attacking() {
    setStoppableInterval(() => {
      if (this.shoot) {
        this.shootBubbles();
      }
      if (this.slap) {
        this.slapEnemy();
      }
    }, 80);
  }

  /**
   * plays the animation of the dying character
   */
  isDying() {
    if (this.electroHit) {
      this.getElectroShock();
    } else {
      this.isPoisoned();
    }
    this.dead++;
  }

  /**
   * plays poisoned dying animation
   */
  isPoisoned() {
    if (this.dead < this.IMAGES_DEAD.length - 1) {
      this.playAnimation(this.IMAGES_DEAD);
    } else {
      this.loadImage(this.IMAGES_DEAD[this.IMAGES_DEAD.length - 1]);
      gameOver = true;
    }
  }
  /**
   * plays electroshocked dying animation
   */
  getElectroShock() {
    if (this.dead < this.IMAGES_DEAD_ELECTRO.length - 1) {
      this.playAnimation(this.IMAGES_DEAD_ELECTRO);
      this.y -= 10;
    } else {
      this.loadImage(
        this.IMAGES_DEAD_ELECTRO[this.IMAGES_DEAD_ELECTRO.length - 1]
      );
      this.y = 200;
      gameOver = true;
    }
  }

  /**
   * plays animation for injured character
   */
  isInjured() {
    if (this.electroHit) {
      this.playAnimation(this.IMAGES_HURT_ELECTRO);
    } else {
      this.playAnimation(this.IMAGES_HURT_POISON);
    }
  }

  /**
   * plays an animation moving to the left
   */
  movingLeft() {
    if (this.world.keyboard.LEFT && this.x > this.world.level.level_start_x) {
      if (this.isCollidingCharacterWithBarrier('left')) {
        this.moveLeft();
        this.otherDirection = true;
      }
    }
  }

  /**
   *plays an animation moving to the right
   */
  movingRight() {
    if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
      if (this.isCollidingCharacterWithBarrier('right')) {
        this.moveRight();
        this.otherDirection = false;
      }
    }
  }

  /**
   * plays an upward moving animation
   */
  movingTop() {
    if (
      this.world.keyboard.UP &&
      this.y > -100 &&
      this.isCollidingCharacterWithBarrier('top')
    ) {
      this.moveUp();
    }
  }

  /**
   * plays a downward animation
   */
  movingDown() {
    if (this.world.keyboard.DOWN && this.y < 250) {
      if (this.isCollidingCharacterWithBarrier('bottom')) {
        this.moveDown();
      }
    }
  }

  /**
   * checks if the character is colliding with a barrier
   * @param {string} side colliding side
   * @returns boolean
   */
  isCollidingCharacterWithBarrier(side) {
    if (
      this.isCollidingWithBarrier(this.world.level.barriers[0]) != side &&
      this.isCollidingWithBarrier(this.world.level.barriers[1]) != side &&
      this.isCollidingWithBarrier(this.world.level.barriers[2]) != side &&
      this.isCollidingWithBarrier(this.world.level.barriers[3]) != side &&
      this.isCollidingWithBarrier(this.world.level.barriers[4]) != side &&
      this.isCollidingWithBarrier(this.world.level.barriers[5]) != side &&
      this.isCollidingWithBarrier(this.world.level.barriers[6]) != side &&
      this.isCollidingWithBarrier(this.world.level.barriers[7]) != side &&
      this.isCollidingWithBarrier(this.world.level.barriers[8]) != side &&
      this.isCollidingWithBarrier(this.world.level.barriers[9]) != side &&
      this.isCollidingWithBarrier(this.world.level.barriers[10]) != side &&
      this.isCollidingWithBarrier(this.world.level.barriers[11]) != side
    ) {
      return true;
    }
  }

  /**
   * plays the shooting bubble animation
   */
  shootBubbles() {
    if (this.attack < this.IMAGES_BUBBLETRAP.length) {
      this.playAnimationOnce(this.IMAGES_BUBBLETRAP[this.attack]);
      this.currentImage = this.attack;
      this.attack++;
    } else {
      this.attack = 0;
      this.shoot = false;
    }
  }

  /**
   * plays the slap animation
   */
  slapEnemy() {
    if (this.attack < this.IMAGES_SLAP.length) {
      this.playAnimationOnce(this.IMAGES_SLAP[this.attack]);
      this.attack++;
    } else {
      this.attack = 0;
      this.slap = false;
    }
  }

  /**
   * increases collectedCoins by 10 when a coin is collected
   */
  collectCoin() {
    this.collectedCoins += 10;
    if (this.collectedCoins % 20 == 0) {
      this.speed += 1;
    }
    if (this.collectedCoins > 100) {
      this.collectedCoins = 100;
    }
  }

  /**
   * increases collectedPoisons by 10 when a poison bottle is collected
   */
  collectPoison() {
    this.collectedPoison += 10;
    if (this.collectedPoison > 100) {
      this.collectedPoison = 100;
    }
  }
}
