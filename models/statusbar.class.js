class Statusbar extends DrawableObject {
  percentage;
  type;

  constructor(x, y, type, percentage) {
    super().loadImages(this.changeImagesByType(type));
    this.x = x;
    this.y = y;
    this.type = type;
    this.width = 100;
    this.height = 50;
    this.setPercentage(percentage);
  }

  setPercentage(percentage) {
    this.percentage = percentage;
    let path = this.changeImagesByType(this.type)[this.resolveImageIndex()];
    this.img = this.imageCache[path];
  }

  resolveImageIndex() {
    if (this.percentage == 100) {
      return 5;
    } else if (this.percentage >= 80) {
      return 4;
    } else if (this.percentage >= 60) {
      return 3;
    } else if (this.percentage >= 40) {
      return 2;
    } else if (this.percentage >= 20) {
      return 1;
    } else {
      return 0;
    }
  }

  changeImagesByType(type) {
    if (type == 'life') {
      return this.IMAGES_LIFE;
    } else if (type == 'coins') {
      return this.IMAGES_COINS;
    } else if (type == 'poison') {
      return this.IMAGES_POISON;
    }
  }

  IMAGES_LIFE = [
    'img/4. Marcadores/Purple/life/0.png',
    'img/4. Marcadores/Purple/life/20.png',
    'img/4. Marcadores/Purple/life/40.png',
    'img/4. Marcadores/Purple/life/60.png',
    'img/4. Marcadores/Purple/life/80.png',
    'img/4. Marcadores/orange/100_  copia.png',
  ];

  IMAGES_COINS = [
    'img/4. Marcadores/Purple/coins/0.png',
    'img/4. Marcadores/Purple/coins/20.png',
    'img/4. Marcadores/Purple/coins/40.png',
    'img/4. Marcadores/Purple/coins/60.png',
    'img/4. Marcadores/Purple/coins/80.png',
    'img/4. Marcadores/orange/100_ copia 2.png',
  ];

  IMAGES_POISON = [
    'img/4. Marcadores/Purple/poison/0.png',
    'img/4. Marcadores/Purple/poison/20.png',
    'img/4. Marcadores/Purple/poison/40.png',
    'img/4. Marcadores/Purple/poison/60.png',
    'img/4. Marcadores/Purple/poison/80.png',
    'img/4. Marcadores/green/poisoned bubbles/100_ copia 3.png',
  ];
}
