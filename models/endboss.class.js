class Endboss extends MovableObject {
  IMAGES_INTRO = [
    'img/2.Enemy/3 Final Enemy/1.Introduce/1.png',
    'img/2.Enemy/3 Final Enemy/1.Introduce/2.png',
    'img/2.Enemy/3 Final Enemy/1.Introduce/3.png',
    'img/2.Enemy/3 Final Enemy/1.Introduce/4.png',
    'img/2.Enemy/3 Final Enemy/1.Introduce/5.png',
    'img/2.Enemy/3 Final Enemy/1.Introduce/6.png',
    'img/2.Enemy/3 Final Enemy/1.Introduce/7.png',
    'img/2.Enemy/3 Final Enemy/1.Introduce/8.png',
    'img/2.Enemy/3 Final Enemy/1.Introduce/9.png',
    'img/2.Enemy/3 Final Enemy/1.Introduce/10.png',
  ];
  IMAGES_FLOATING = [
    'img/2.Enemy/3 Final Enemy/2.floating/1.png',
    'img/2.Enemy/3 Final Enemy/2.floating/2.png',
    'img/2.Enemy/3 Final Enemy/2.floating/3.png',
    'img/2.Enemy/3 Final Enemy/2.floating/4.png',
    'img/2.Enemy/3 Final Enemy/2.floating/5.png',
    'img/2.Enemy/3 Final Enemy/2.floating/6.png',
    'img/2.Enemy/3 Final Enemy/2.floating/7.png',
    'img/2.Enemy/3 Final Enemy/2.floating/8.png',
    'img/2.Enemy/3 Final Enemy/2.floating/9.png',
    'img/2.Enemy/3 Final Enemy/2.floating/10.png',
    'img/2.Enemy/3 Final Enemy/2.floating/11.png',
    'img/2.Enemy/3 Final Enemy/2.floating/12.png',
    'img/2.Enemy/3 Final Enemy/2.floating/13.png',
  ];

  IMAGES_HURT = [
    'img/2.Enemy/3 Final Enemy/Hurt/1.png',
    'img/2.Enemy/3 Final Enemy/Hurt/2.png',
    'img/2.Enemy/3 Final Enemy/Hurt/3.png',
    'img/2.Enemy/3 Final Enemy/Hurt/4.png',
  ];

  IMAGES_DEAD = [
    'img/2.Enemy/3 Final Enemy/Dead/5.png',
    'img/2.Enemy/3 Final Enemy/Dead/6.png',
    'img/2.Enemy/3 Final Enemy/Dead/7.png',
    'img/2.Enemy/3 Final Enemy/Dead/8.png',
    'img/2.Enemy/3 Final Enemy/Dead/9.png',
    'img/2.Enemy/3 Final Enemy/Dead/10.png',
  ];

  IMAGES_ATTACK = [
    'img/2.Enemy/3 Final Enemy/Attack/1.png',
    'img/2.Enemy/3 Final Enemy/Attack/2.png',
    'img/2.Enemy/3 Final Enemy/Attack/3.png',
    'img/2.Enemy/3 Final Enemy/Attack/4.png',
    'img/2.Enemy/3 Final Enemy/Attack/5.png',
    'img/2.Enemy/3 Final Enemy/Attack/6.png',
  ];
  species;
  hadFirstContact = false;
  i = 0;

  constructor() {
    super().loadImage(this.IMAGES_INTRO[0]);
    this.loadImages(this.IMAGES_INTRO);
    this.loadImages(this.IMAGES_FLOATING);
    this.loadImages(this.IMAGES_HURT);
    this.loadImages(this.IMAGES_DEAD);
    this.loadImages(this.IMAGES_ATTACK);
    this.height = 500;
    this.width = 400;
    this.species = 'endboss';
    this.x = 4700;
    this.y = -100;
    this.animate();
    this.firstContact();
  }

  /**
   * animates the endboss
   */
  animate() {
    setStoppableInterval(() => {
      if (this.hadFirstContact) {
        if (this.i < 10) {
          this.playAnimation(this.IMAGES_INTRO);
        } else if (this.isDead()) {
          this.endbossKilled();
        } else if (this.isHurt()) {
          this.playAnimation(this.IMAGES_HURT);
        } else if (!this.isHurt() && this.distance() < 500) {
          this.isAttacking();
        } else {
          this.playAnimation(this.IMAGES_FLOATING);
        }
      }
      this.i++;
    }, 150);
  }

  /**
   * plays the dying animation for the endboss
   */
  endbossKilled() {
    this.isKilled = true;
    if (this.dead < this.IMAGES_DEAD.length - 1) {
      this.playAnimation(this.IMAGES_DEAD);
      this.y += 20;
    } else {
      this.loadImage(this.IMAGES_DEAD[this.IMAGES_DEAD.length - 1]);
      sounds.endbossMusic.pause();
      winner = true;
    }
    this.dead++;
  }

  /**
   * plays the attacking animation for the endboss
   */
  isAttacking() {
    this.playAnimation(this.IMAGES_ATTACK);
    if (this.x < 4000 || this.x > world.character.x) {
      this.x -= 1 + Math.random() * 7;
      this.otherDirection = false;
    } else {
      this.otherDirection = true;
      this.x += 1 + Math.random() * 7;
    }
  }

  /**
   * calculates the distance between the centre of the character and the end boss
   * @returns boolean
   */
  distance() {
    return this.centerX() - world.character.centerX();
  }

  /**
   * checks the first contact and sets the x coordinate to 4000
   */
  firstContact() {
    setStoppableInterval(() => {
      if (world) {
        if (world.character.x > 4000 && !this.hadFirstContact) {
          this.i = 0;
          this.hadFirstContact = true;
          world.level.level_start_x = 4000;
        }
        this.endbossMusic();
      }
    }, 1000 / 60);
  }

  /**
   * plays the endboss music
   */
  endbossMusic() {
    if (sound && world.character.x > 4000) {
      sounds.endbossMusic.play();
    } else if (!sound && world.character.x > 4000) {
      sounds.endbossMusic.pause();
    }
  }
}
