class CollectableObject extends DrawableObject {
  IMAGES_COIN = [
    'img/4. Marcadores/coins/1.png',
    'img/4. Marcadores/coins/2.png',
    'img/4. Marcadores/coins/3.png',
    'img/4. Marcadores/coins/4.png',
  ];

  IMAGES_POISON_BOTTLE = [
    'img/4. Marcadores/posion/1.png',
    'img/4. Marcadores/posion/2.png',
    'img/4. Marcadores/posion/3.png',
    'img/4. Marcadores/posion/4.png',
    'img/4. Marcadores/posion/5.png',
    'img/4. Marcadores/posion/6.png',
    'img/4. Marcadores/posion/7.png',
    'img/4. Marcadores/posion/8.png',
  ];

  width = 40;
  height = 40;
  collected = false;

  constructor(x, y, width, height, type) {
    super().loadImage(this.changeImagesByType(type)[0]);
    this.loadImages(this.changeImagesByType(type));
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.animate(type);
    this.goUp();
  }

  animate(type) {
    setStoppableInterval(() => {
      this.playAnimation(this.changeImagesByType(type));
    }, 200);
  }

  goUp() {
    setStoppableInterval(() => {
      if (this.collected) {
        this.y -= 40;
      }
    }, 75);
  }

  changeImagesByType(type) {
    if (type == 'coin') {
      return this.IMAGES_COIN;
    } else if (type == 'poisonBottle') {
      return this.IMAGES_POISON_BOTTLE;
    }
  }
}
