class Character extends MovableObject {
  speed = 5;
  swiming_sound = new Audio('audio/swim.mp3');
  bubble_sound = new Audio('audio/bubble.mp3');
  collectCoin_sound = new Audio('audio/coin.mp3');
  collectPoisonBottle_sound = new Audio('audio/poison-bubble.mp3');
  world;
  isPaused = false;
  dead = 0;
  collectedCoins = 0;
  collectedPoison = 0;

  offset_frame = {};

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
    this.loadImages(this.IMAGES_DEAD);
    this.loadImages(this.IMAGES_HURT_POISON);
    this.animate();
  }

  animate() {
    setInterval(() => {
      if (
        (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) ||
        (this.world.keyboard.D && this.x < this.world.level.level_end_x)
      ) {
        this.moveRight();
        this.otherDirection = false;
        this.swiming_sound.play();
      }
      if (
        (this.world.keyboard.LEFT && this.x > 0) ||
        (this.world.keyboard.A && this.x > 0)
      ) {
        this.moveLeft();
        this.otherDirection = true;
        this.swiming_sound.play();
      }
      if (
        (this.world.keyboard.UP && this.y > -100) ||
        (this.world.keyboard.W && this.y > -100)
      ) {
        this.moveUp();
        this.swiming_sound.play();
      }
      if (
        (this.world.keyboard.DOWN && this.y < 250) ||
        (this.world.keyboard.S && this.y < 250)
      ) {
        this.moveDown();
        this.swiming_sound.play();
      }
      this.world.camera_x = -this.x + 100;
    }, 1000 / 60);

    let animation = setInterval(() => {
      if (this.isPaused) {
        clearInterval(animation);
      } else if (this.isDead()) {
        if (this.dead < this.IMAGES_DEAD.length - 1) {
          this.playAnimation(this.IMAGES_DEAD);
        } else {
          this.isPaused = true;
        }
        this.dead++;
      } else if (this.isHurt()) {
        this.playAnimation(this.IMAGES_HURT_POISON);
      } else if (
        this.world.keyboard.RIGHT ||
        this.world.keyboard.D ||
        this.world.keyboard.LEFT ||
        this.world.keyboard.A ||
        this.world.keyboard.UP ||
        this.world.keyboard.W ||
        this.world.keyboard.DOWN ||
        this.world.keyboard.S
      ) {
        this.playAnimation(this.IMAGES_SWIM);
        this.isPaused = false;
      } else if (this.world.keyboard.SPACE || this.world.keyboard.E) {
        if (this.attack < 8) {
          this.playAnimation(this.IMAGES_BUBBLETRAP);
          this.attack++;
        } else {
          this.bubble_sound.play();
          this.attack = 0;
        }
      } else {
        this.playAnimation(this.IMAGES_IDLE);
        this.isPaused = false;
        this.attack = 0;
      }
    }, 150);
  }

  collectCoin() {
    this.collectedCoins += 20;
    if (this.collectedCoins > 100) {
      this.collectedCoins = 100;
    } else {
    }
  }
  collectPoison() {
    this.collectedPoison += 20;
    if (this.collectedPoison > 100) {
      this.collectedPoison = 100;
    } else {
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
    'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/1.png',
    'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/2.png',
    'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/3.png',
    'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/4.png',
    'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/5.png',
    'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/6.png',
    'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/7.png',
    'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/8.png',
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
