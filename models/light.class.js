class Light extends MovableObject {
  IMAGES = [
    'img/3. Background/Layers/1. Light/1.png',
    'img/3. Background/Layers/1. Light/2.png',
  ];
  constructor() {
    super().loadImage(this.IMAGES[0]);

    this.x = 250;
    this.y = 0;
    this.width = 500;
  }
}
