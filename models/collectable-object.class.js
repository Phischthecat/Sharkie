class CollectableObject extends DrawableObject {
  IMAGES_COIN = [
    'img/4. Marcadores/1. Coins/1.png',
    'img/4. Marcadores/1. Coins/2.png',
    'img/4. Marcadores/1. Coins/3.png',
    'img/4. Marcadores/1. Coins/4.png',
  ];

  IMAGES_POISON_BOTTLE = [
    'img/4. Marcadores/Posión/Animada/1.png',
    'img/4. Marcadores/Posión/Animada/2.png',
    'img/4. Marcadores/Posión/Animada/3.png',
    'img/4. Marcadores/Posión/Animada/4.png',
    'img/4. Marcadores/Posión/Animada/5.png',
    'img/4. Marcadores/Posión/Animada/6.png',
    'img/4. Marcadores/Posión/Animada/7.png',
    'img/4. Marcadores/Posión/Animada/8.png',
  ];

  width = 40;
  height = 40;
  collected = false;

  constructor(x, width, height, type) {
    super().loadImages(this.changeImagesByType(type));
    this.x = x;
    this.y = 0 + Math.random() * 350;
    this.width = width;
    this.height = height;
    this.animate(type);
    this.goUp();
  }

  animate(type) {
    setInterval(() => {
      this.playAnimation(this.changeImagesByType(type));
    }, 200);
  }

  goUp() {
    setInterval(() => {
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
