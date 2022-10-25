class Endboss extends MovableObject {
  species;
  world;
  hadFirstContact = false;
  i = 0;

  constructor() {
    super().loadImage(this.IMAGES_FLOATING[0]);
    this.loadImages(this.IMAGES_INTRO);
    this.loadImages(this.IMAGES_FLOATING);
    this.height = 500;
    this.width = 400;
    this.species = 'endboss';
    this.x = 2200;
    this.y = -100;
    this.animate();
  }

  animate() {
    setInterval(() => {
      if (this.i < 10) {
        this.playAnimation(this.IMAGES_INTRO);
      } else {
        this.playAnimation(this.IMAGES_FLOATING);
      }
      this.i++;
    }, 150);
    setInterval(() => {
      if (world) {
        if (world.character.x > 1600 && !this.hadFirstContact) {
          this.i = 0;
          this.hadFirstContact = true;
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
}
