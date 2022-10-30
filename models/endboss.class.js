class Endboss extends MovableObject {
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

  animate() {
    let endboss_animation = setInterval(() => {
      if (this.hadFirstContact) {
        if (this.i < 10) {
          this.playAnimation(this.IMAGES_INTRO);
        } else if (this.isDead()) {
          this.endbossKilled(endboss_animation);
        } else if (this.isHurt()) {
          this.playAnimation(this.IMAGES_HURT);
        } else if (!this.isHurt()) {
          this.isAttacking();
        } else {
          this.playAnimation(this.IMAGES_FLOATING);
        }
      }
      this.i++;
    }, 150);
  }

  endbossKilled(endboss_animation) {
    this.isKilled = true;
    if (this.dead < this.IMAGES_DEAD.length - 1) {
      this.playAnimation(this.IMAGES_DEAD);
      this.y += 20;
    } else {
      this.loadImage(this.IMAGES_DEAD[this.IMAGES_DEAD.length - 1]);
      clearInterval(endboss_animation);
    }
    this.dead++;
  }

  isAttacking() {
    this.playAnimation(this.IMAGES_ATTACK);
    this.x -= 1 + Math.random() * 7;
  }

  firstContact() {
    setInterval(() => {
      if (world) {
        if (world.character.x > 4000 && !this.hadFirstContact) {
          this.i = 0;
          this.hadFirstContact = true;
          world.level.level_start_x = 4000;
          sounds.ambience.pause();
          sounds.endbossMusic.play();
        }
      }
    }, 1000 / 60);
  }

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
    'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 6.png',
    'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 7.png',
    'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 8.png',
    'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 9.png',
    'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 10.png',
  ];

  IMAGES_ATTACK = [
    'img/2.Enemy/3 Final Enemy/Attack/1.png',
    'img/2.Enemy/3 Final Enemy/Attack/2.png',
    'img/2.Enemy/3 Final Enemy/Attack/3.png',
    'img/2.Enemy/3 Final Enemy/Attack/4.png',
    'img/2.Enemy/3 Final Enemy/Attack/5.png',
    'img/2.Enemy/3 Final Enemy/Attack/6.png',
  ];
}
