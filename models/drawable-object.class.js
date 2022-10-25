class DrawableObject {
  x = 50;
  y = 50;
  height = 250;
  width = 200;
  img;
  imageCache = {};
  currentImage = 0;

  offset = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  };

  /**
   * loads a image by its relative path
   * @param {string} path the relative path to the image
   */
  loadImage(path) {
    this.img = new Image(); //entspricht this.img = document.getElementById('image') bzw. <img id="image">
    this.img.src = path;
  }

  loadImages(arr) {
    try {
      arr.forEach((path) => {
        let img = new Image();
        img.src = path;
        this.imageCache[path] = img;
      });
    } catch (e) {
      console.warn('There is an error', e);
      console.log('Could not load the image', img.src);
    }
  }

  playAnimation(images) {
    let i = this.currentImage % images.length;
    let path = images[i];
    this.img = this.imageCache[path];
    this.currentImage++;
  }

  draw(ctx) {
    try {
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    } catch (e) {
      console.warn('There is an error', e);
      console.log('Could not load the image', this.img.src);
    }
  }

  drawFrame(ctx) {
    if (this instanceof Character || this instanceof Pufferfish) {
      ctx.beginPath();
      ctx.lineWidth = '2';
      ctx.strokeStyle = 'red';
      ctx.rect(
        this.x + this.offset.left,
        this.y + this.offset.top,
        this.width - this.offset.right,
        this.height - this.offset.bottom
      );
      ctx.stroke();
    }
  }
}
