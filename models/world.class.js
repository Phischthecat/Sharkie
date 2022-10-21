class World {
  character = new Character();
  level = level1;
  canvas;
  ctx;
  keyboard;
  camera_x = 0;
  statusBar = [
    new Statusbar(-10, 'life', 100),
    new Statusbar(40, 'coins', 0),
    new Statusbar(90, 'poison', 0),
  ];
  shootableObjects = [];

  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext('2d');
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw(); // "malt" die welt
    this.setWorld();
    this.run();
  }

  setWorld() {
    this.character.world = this; //übergibt die aktuelle instanz von world an alle movableObjects (aktuell nur character)
  }

  run() {
    setInterval(() => {
      this.checkCollisions();
      this.checkShootObjects();
    }, 150);
  }

  checkShootObjects() {
    if (this.keyboard.SPACE && this.character.attack > 7) {
      let bubble = new ShootableObject(
        this.character.x + 170,
        this.character.y + 130
      );
      this.shootableObjects.push(bubble);
    }
  }

  checkCollisions() {
    this.level.enemies.forEach((enemy) => {
      if (this.character.isColliding(enemy)) {
        this.character.hit();
        this.statusBar[0].setPercentage(this.character.energy);
      }
    });

    // this.shootableObjects.forEach((bubble) => {});
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // löscht alle objects zu beginn

    this.ctx.translate(this.camera_x, 0); //verschiebt den ctx (context) um camera_x nach links

    this.addObjectstoMap(this.level.backgroundObjects);
    this.addToMap(this.character); //fügt den character hinzu
    this.addObjectstoMap(this.level.enemies); //fügt die enemies hinzu
    this.addObjectstoMap(this.shootableObjects); //fügt die bubbles hinzu
    this.addObjectstoMap(this.level.collectableObjects); //fügt die collectables hinzu
    this.ctx.translate(-this.camera_x, 0); //fügt die backgroundObjects hinzu
    // Space for fixed objects
    this.addObjectstoMap(this.statusBar);
    this.ctx.translate(this.camera_x, 0); //fügt den character hinzu

    this.ctx.translate(-this.camera_x, 0); //verschiebt den ctx (context) wieder um camera_x nach rechts
    //wartet bis die bilder geladen sind und ruft dann immer wieder die draw()-Funktion auf
    let self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }

  addToMap(mo) {
    this.flipImage(mo);
    mo.draw(this.ctx);
    // mo.drawFrame(this.ctx);
    this.flipImageBack(mo);
  }

  addObjectstoMap(objects) {
    objects.forEach((object) => {
      this.addToMap(object);
    });
  }

  flipImage(mo) {
    if (mo.otherDirection) {
      this.ctx.save();
      this.ctx.translate(mo.width, 0);
      this.ctx.scale(-1, 1);
      mo.x = mo.x * -1;
    }
  }

  flipImageBack(mo) {
    if (mo.otherDirection) {
      mo.x = mo.x * -1;
      this.ctx.restore();
    }
  }
}
