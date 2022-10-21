class BackgroundObjects extends MovableObject {
  height = 480;
  width = 720;
  y = 0;

  constructor(imagePath, x) {
    super().loadImage(imagePath);
    this.x = x;
  }
}
