class Barrier extends MovableObject {
  IMAGES_BARRIER = [
    'img/3. Background/Barrier/top.png',
    'img/3. Background/Barrier/bottom.png',
    'img/3. Background/Barrier/pillar.png',
    'img/3. Background/Barrier/rock.png',
  ];
  offset = {
    top: 30,
    right: 25,
    bottom: 90,
    left: 20,
  };

  constructor(x, width, height, side, type) {
    super().loadImage(this.IMAGES_BARRIER[this.changeImageByType(type)]);
    this.x = x;
    this.y = this.calcY(side, height);
    this.width = width;
    this.height = height;
  }
  /**
   * Calculates the y coordinate hand of the side and the height
   * @param {string} side choose between 'top' & 'bottom'
   * @param {number} height height of the objebt
   * @returns Y-axis coordinate
   */
  calcY(side, height) {
    if (side == 'down') {
      return 480 - height;
    } else {
      return 0;
    }
  }

  /**
   * change the picture by means of the type
   * @param {string} type type of the barrier
   * @returns number of the image
   */
  changeImageByType(type) {
    if (type == 'top') {
      return 0;
    } else if (type == 'bottom') {
      return 1;
    } else if (type == 'pillar') {
      return 2;
    } else if (type == 'rock') {
      return 3;
    }
  }
}
