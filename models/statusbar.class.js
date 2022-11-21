class Statusbar extends DrawableObject {
  IMAGES_LIFE = [
    'img/4. Marcadores/statusbar/life/0.png',
    'img/4. Marcadores/statusbar/life/20.png',
    'img/4. Marcadores/statusbar/life/40.png',
    'img/4. Marcadores/statusbar/life/60.png',
    'img/4. Marcadores/statusbar/life/80.png',
    'img/4. Marcadores/statusbar/life/100.png',
  ];

  IMAGES_COINS = [
    'img/4. Marcadores/statusbar/coin/0.png',
    'img/4. Marcadores/statusbar/coin/20.png',
    'img/4. Marcadores/statusbar/coin/40.png',
    'img/4. Marcadores/statusbar/coin/60.png',
    'img/4. Marcadores/statusbar/coin/80.png',
    'img/4. Marcadores/statusbar/coin/100.png',
  ];

  IMAGES_POISON = [
    'img/4. Marcadores/statusbar/poison/0.png',
    'img/4. Marcadores/statusbar/poison/20.png',
    'img/4. Marcadores/statusbar/poison/40.png',
    'img/4. Marcadores/statusbar/poison/60.png',
    'img/4. Marcadores/statusbar/poison/80.png',
    'img/4. Marcadores/statusbar/poison/100.png',
  ];
  percentage;
  type;
  width;
  height;

  constructor(x, y, width, height, type, percentage) {
    super().loadImages(this.changeImagesByType(type));
    this.x = x;
    this.y = y;
    this.type = type;
    this.width = width;
    this.height = height;

    this.setPercentage(percentage);
  }

  /**
   * loads the status bar depending on the percentage value
   * @param {number} percentage Percentage of statusbar
   */
  setPercentage(percentage) {
    this.percentage = percentage;
    let path = this.changeImagesByType(this.type)[this.resolveImageIndex()];
    this.img = this.imageCache[path];
  }

  /**
   * returns the number of images depending on the percentage value
   * @returns number of images
   */
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

  /**
   * changes images by type
   * @param {string} type type of statusbars
   * @returns images by type
   */
  changeImagesByType(type) {
    if (type == 'life') {
      return this.IMAGES_LIFE;
    } else if (type == 'coins') {
      return this.IMAGES_COINS;
    } else if (type == 'poison') {
      return this.IMAGES_POISON;
    }
  }
}
