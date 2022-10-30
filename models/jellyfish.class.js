class Jellyfish extends MovableObject {
  height = 75;
  width = 75;
  species;

  constructor(x, type) {
    super().loadImage(this.changeImagesByType(type)[0]);
    this.loadImages(this.changeImagesByType(type));
    this.loadImages(this.changeImagesByTypeDEAD(type));
    this.x = x;
    this.y = 150 - this.height / 2;
    this.speed = 0.1 + Math.random() * 0.35;
    this.species = 'Jellyfish ' + type;
    this.changeDirection(12000);
    this.animate(type);
  }

  animate(type) {
    setInterval(() => {
      this.swim();
    }, 1000 / 60);
    setInterval(() => {
      if (this.isKilled) {
        this.playAnimation(this.changeImagesByTypeDEAD(type));
      } else {
        this.playAnimation(this.changeImagesByType(type));
      }
    }, 175);
  }

  swim() {
    if (!this.otherDirection) {
      this.moveDown();
    } else {
      this.moveUp();
    }
  }

  changeImagesByType(type) {
    if (type == 'green') {
      return this.IMAGES_GREEN;
    } else if (type == 'pink') {
      return this.IMAGES_PINK;
    } else if (type == 'yellow') {
      return this.IMAGES_YELLOW;
    } else if (type == 'lila') {
      return this.IMAGES_LILA;
    }
  }

  changeImagesByTypeDEAD(type) {
    if (type == 'green') {
      return this.IMAGES_GREEN_DEAD;
    } else if (type == 'lila') {
      return this.IMAGES_LILA_DEAD;
    } else if (type == 'pink') {
      return this.IMAGES_PINK_DEAD;
    } else if (type == 'yellow') {
      return this.IMAGES_YELLOW_DEAD;
    }
  }

  IMAGES_LILA = [
    'img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png',
    'img/2.Enemy/2 Jelly fish/Regular damage/Lila 2.png',
    'img/2.Enemy/2 Jelly fish/Regular damage/Lila 3.png',
    'img/2.Enemy/2 Jelly fish/Regular damage/Lila 4.png',
  ];

  IMAGES_LILA_DEAD = [
    'img/2.Enemy/2 Jelly fish/Dead/Lila/L1.png',
    'img/2.Enemy/2 Jelly fish/Dead/Lila/L2.png',
    'img/2.Enemy/2 Jelly fish/Dead/Lila/L3.png',
    'img/2.Enemy/2 Jelly fish/Dead/Lila/L4.png',
  ];

  IMAGES_YELLOW = [
    'img/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png',
    'img/2.Enemy/2 Jelly fish/Regular damage/Yellow 2.png',
    'img/2.Enemy/2 Jelly fish/Regular damage/Yellow 3.png',
    'img/2.Enemy/2 Jelly fish/Regular damage/Yellow 4.png',
  ];

  IMAGES_YELLOW_DEAD = [
    'img/2.Enemy/2 Jelly fish/Dead/Yellow/y1.png',
    'img/2.Enemy/2 Jelly fish/Dead/Yellow/y2.png',
    'img/2.Enemy/2 Jelly fish/Dead/Yellow/y3.png',
    'img/2.Enemy/2 Jelly fish/Dead/Yellow/y4.png',
  ];

  IMAGES_GREEN = [
    'img/2.Enemy/2 Jelly fish/Súper dangerous/Green 1.png',
    'img/2.Enemy/2 Jelly fish/Súper dangerous/Green 2.png',
    'img/2.Enemy/2 Jelly fish/Súper dangerous/Green 3.png',
    'img/2.Enemy/2 Jelly fish/Súper dangerous/Green 4.png',
  ];

  IMAGES_GREEN_DEAD = [
    'img/2.Enemy/2 Jelly fish/Dead/green/g1.png',
    'img/2.Enemy/2 Jelly fish/Dead/green/g2.png',
    'img/2.Enemy/2 Jelly fish/Dead/green/g3.png',
    'img/2.Enemy/2 Jelly fish/Dead/green/g4.png',
  ];

  IMAGES_PINK = [
    'img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 1.png',
    'img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 2.png',
    'img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 3.png',
    'img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 4.png',
  ];

  IMAGES_PINK_DEAD = [
    'img/2.Enemy/2 Jelly fish/Dead/Pink/P1.png',
    'img/2.Enemy/2 Jelly fish/Dead/Pink/P2.png',
    'img/2.Enemy/2 Jelly fish/Dead/Pink/P3.png',
    'img/2.Enemy/2 Jelly fish/Dead/Pink/P4.png',
  ];
}
