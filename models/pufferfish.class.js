class Pufferfish extends MovableObject {
  height = 50;
  width = 75;

  offset = {
    top: 0,
    right: 5,
    bottom: 10,
    left: 0,
  };

  offset_agressive = {
    top: -20,
    right: -30,
    bottom: -30,
    left: -20,
  };

  constructor(type) {
    super().loadImage(this.changeImagesByType(type)[0]);
    this.loadImages(this.changeImagesByType(type));

    this.x = 200 + Math.random() * 500; // erzeugt Zahl zwischen 200 bis 700
    this.y = 50 + Math.random() * 250; // Zahl zwischen 50 bis 350
    this.speed = 0.15 + Math.random() * 0.25;
    this.animate(type);
  }

  animate(type) {
    setInterval(() => {
      this.moveLeft();
    }, 1000 / 60);
    setInterval(() => {
      this.playAnimation(this.changeImagesByType(type));
    }, 175);
  }

  changeImagesByType(type) {
    if (type == 'orange') {
      return this.IMAGES_ORANGE;
    } else if (type == 'pink') {
      return this.IMAGES_PINK;
    } else if (type == 'redblue') {
      return this.IMAGES_REDBLUE;
    }
  }

  IMAGES_ORANGE = [
    '../img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png',
    '../img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png',
    '../img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png',
    '../img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png',
    '../img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png',
  ];

  IMAGES_PINK = [
    '../img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim1.png',
    '../img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim2.png',
    '../img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim3.png',
    '../img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim4.png',
    '../img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim5.png',
  ];

  IMAGES_REDBLUE = [
    '../img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png',
    '../img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim2.png',
    '../img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim3.png',
    '../img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim4.png',
    '../img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim5.png',
  ];
}
