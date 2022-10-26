class Pufferfish extends MovableObject {
  height = 50;
  width = 75;
  species;
  isAgressive = false;

  offset = {
    top: 0,
    right: 5,
    bottom: 10,
    left: 0,
  };

  constructor(type) {
    super().loadImage(this.changeImagesByType(type)[0]);
    this.loadImages(this.changeImagesByType(type));
    this.loadImages(this.changeImagesByTypeDEAD(type));
    this.loadImages(this.changeImagesByTypeAGRESSIVE(type));
    this.species = 'Pufferfish ' + type;
    this.x = 200 + Math.random() * 500; // erzeugt Zahl zwischen 200 bis 700
    this.y = 50 + Math.random() * 250; // Zahl zwischen 50 bis 350
    this.speed = 0.15 + Math.random() * 0.25;
    this.changeDirection(10000);
    this.animate(type);
  }

  animate(type) {
    setInterval(() => {
      if (this.isKilled) {
        this.x -= 15;
        this.y -= 15;
      } else {
        this.swim();
      }
    }, 1000 / 60);
    setInterval(() => {
      if (this.isAgressive) {
        this.playAnimation(this.changeImagesByTypeAGRESSIVE(type));
      } else if (this.isKilled) {
        this.playAnimation(this.changeImagesByTypeDEAD(type));
      } else {
        this.playAnimation(this.changeImagesByType(type));
      }
    }, 175);
  }

  swim() {
    if (!this.otherDirection) {
      this.moveLeft();
    } else {
      this.moveRight();
    }
  }

  changeImagesByType(type) {
    if (type == 'pink') {
      return this.IMAGES_PINK;
    } else if (type == 'redblue') {
      return this.IMAGES_REDBLUE;
    } else if (type == 'green') {
      return this.IMAGES_GREEN;
    }
  }

  changeImagesByTypeDEAD(type) {
    if (type == 'pink') {
      return this.IMAGES_PINK_DEAD;
    } else if (type == 'redblue') {
      return this.IMAGES_REDBLUE_DEAD;
    } else if (type == 'green') {
      return this.IMAGES_GREEN_DEAD;
    }
  }

  changeImagesByTypeAGRESSIVE(type) {
    if (type == 'pink') {
      return this.IMAGES_PINK_AGRESSIVE;
    } else if (type == 'redblue') {
      return this.IMAGES_REDBLUE_AGRESSIVE;
    } else if (type == 'green') {
      return this.IMAGES_GREEN_AGRESSIVE;
    }
  }

  IMAGES_GREEN = [
    '../img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png',
    '../img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png',
    '../img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png',
    '../img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png',
    '../img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png',
  ];

  IMAGES_GREEN_DEAD = [
    'img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.Dead 1 (can animate by going up).png',
  ];

  IMAGES_GREEN_TRANSITION = [
    'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition5.png',
    'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition4.png',
    'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition3.png',
    'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition2.png',
    'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition1.png',
  ];

  IMAGES_GREEN_AGRESSIVE = [
    'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim1.png',
    'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim2.png',
    'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim3.png',
    'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim4.png',
    'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim5.png',
  ];

  IMAGES_PINK = [
    '../img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim1.png',
    '../img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim2.png',
    '../img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim3.png',
    '../img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim4.png',
    '../img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim5.png',
  ];

  IMAGES_PINK_DEAD = [
    'img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/2.png',
  ];

  IMAGES_PINK_AGRESSIVE = [
    'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/2.bubbleswim1.png',
    'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/2.bubbleswim2.png',
    'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/2.bubbleswim3.png',
    'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/2.bubbleswim4.png',
    'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/2.bubbleswim5.png',
    'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition5.png',
    'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition4.png',
    'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition3.png',
    'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition2.png',
    'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition1.png',
  ];

  IMAGES_REDBLUE = [
    '../img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png',
    '../img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim2.png',
    '../img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim3.png',
    '../img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim4.png',
    '../img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim5.png',
  ];

  IMAGES_REDBLUE_AGRESSIVE = [
    'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim1.png',
    'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim2.png',
    'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim3.png',
    'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim4.png',
    'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim5.png',
    'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition5.png',
    'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition4.png',
    'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition3.png',
    'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition2.png',
    'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition1.png',
  ];

  IMAGES_REDBLUE_DEAD = [
    'img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/3.png',
  ];
}
