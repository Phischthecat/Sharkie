class Keyboard {
  UP = false;
  DOWN = false;
  LEFT = false;
  RIGHT = false;
  SPACE = false;
  E = false;
  Q = false;

  constructor() {
    this.forMovingWithKeyboard();
  }

  forMovingWithKeyboard() {
    window.addEventListener('keydown', (event) => {
      if (event.keyCode == 32) {
        this.SPACE = true;
      }
      if (event.keyCode == 37) {
        this.LEFT = true;
      }
      if (event.keyCode == 38) {
        this.UP = true;
      }
      if (event.keyCode == 39) {
        this.RIGHT = true;
      }
      if (event.keyCode == 40) {
        this.DOWN = true;
      }
      if (event.keyCode == 69) {
        this.E = true;
      }
      if (event.keyCode == 81) {
        this.Q = true;
      }
    });

    window.addEventListener('keyup', (event) => {
      if (event.keyCode == 32) {
        this.SPACE = false;
      }
      if (event.keyCode == 37) {
        this.LEFT = false;
      }
      if (event.keyCode == 38) {
        this.UP = false;
      }
      if (event.keyCode == 39) {
        this.RIGHT = false;
      }
      if (event.keyCode == 40) {
        this.DOWN = false;
      }
      if (event.keyCode == 69) {
        this.E = false;
      }
      if (event.keyCode == 81) {
        this.Q = false;
      }

      world.character.currentImage = 0;
      world.character.attack = 0;
    });
  }

  forMovingWithTouch() {}
}
