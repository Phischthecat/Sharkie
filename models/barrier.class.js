class Barrier extends MovableObject {
  height = 170;
  width = 1000;

  offset = {
    top: 30,
    right: 25,
    bottom: 70,
    left: 20,
  };

  constructor(x, y, type) {
    super().loadImage(this.IMAGES_BARRIER[this.changeImageByType(type)]);
    this.x = x;
    this.y = y;
  }

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

  IMAGES_BARRIER = [
    'img/3. Background/Barrier/top.png',
    'img/3. Background/Barrier/bottom.png',
    'img/3. Background/Barrier/pillar.png',
    'img/3. Background/Barrier/rock.png',
  ];
}
