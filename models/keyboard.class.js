class Keyboard {
  UP = false;
  DOWN = false;
  LEFT = false;
  RIGHT = false;
  SPACE = false;
  D = false;

  constructor() {
    this.forMovingWithKeyboard();
    this.forMovingWithTouch();
  }

  /**
   * registers the pressed keys
   */
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
      if (event.keyCode == 68) {
        this.D = true;
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
      if (event.keyCode == 68) {
        this.D = false;
      }

      world.character.currentImage = 0;
      world.character.attack = 0;
    });
  }

  /**
   * registers the touched keys
   */
  forMovingWithTouch() {
    setTimeout(() => {
      document
        .getElementById('mobileUp')
        .addEventListener('touchstart', (e) => {
          e.preventDefault();
          this.UP = true;
        });
      document.getElementById('mobileUp').addEventListener('touchend', (e) => {
        e.preventDefault();
        this.UP = false;
        world.character.currentImage = 0;
        world.character.attack = 0;
      });
      document
        .getElementById('mobileDown')
        .addEventListener('touchstart', (e) => {
          e.preventDefault();
          this.DOWN = true;
        });
      document
        .getElementById('mobileDown')
        .addEventListener('touchend', (e) => {
          e.preventDefault();
          this.DOWN = false;
          world.character.currentImage = 0;
          world.character.attack = 0;
        });
      document
        .getElementById('mobileLeft')
        .addEventListener('touchstart', (e) => {
          e.preventDefault();
          this.LEFT = true;
        });
      document
        .getElementById('mobileLeft')
        .addEventListener('touchend', (e) => {
          e.preventDefault();
          this.LEFT = false;
          world.character.currentImage = 0;
          world.character.attack = 0;
        });
      document
        .getElementById('mobileRight')
        .addEventListener('touchstart', (e) => {
          e.preventDefault();
          this.RIGHT = true;
        });
      document
        .getElementById('mobileRight')
        .addEventListener('touchend', (e) => {
          e.preventDefault();
          this.RIGHT = false;
          world.character.currentImage = 0;
          world.character.attack = 0;
        });
      document
        .getElementById('bubbleShoot')
        .addEventListener('touchstart', (e) => {
          e.preventDefault();
          this.SPACE = true;
        });
      document
        .getElementById('bubbleShoot')
        .addEventListener('touchend', (e) => {
          e.preventDefault();
          this.SPACE = false;
          world.character.currentImage = 0;
          world.character.attack = 0;
        });
      document.getElementById('finSlap').addEventListener('touchstart', (e) => {
        e.preventDefault();
        this.D = true;
      });
      document.getElementById('finSlap').addEventListener('touchend', (e) => {
        e.preventDefault();
        this.D = false;
        world.character.currentImage = 0;
        world.character.attack = 0;
      });
    }, 200);
  }
}
