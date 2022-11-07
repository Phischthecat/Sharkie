class World {
  character = new Character();
  level = level1;
  canvas;
  ctx;
  keyboard;
  camera_x = 0;
  statusBar = [
    new Statusbar(20, -10, 'life', 100),
    new Statusbar(20, 40, 'coins', 0),
    new Statusbar(20, 90, 'poison', 0),
  ];
  shootableObjects = [];
  framework1 = { x: -100, y: 0, w: 5000, h: 20 };
  framework2 = { x: -100, y: 460, w: 5000, h: 20 };
  firstStageSolved = false;
  secondStageSolved = false;
  thirdStageSolved = false;

  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext('2d');
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw(); // "malt" die welt
    this.setWorld();
    this.run();
  }

  setWorld() {
    this.level.world = this;
    this.character.world = this; //übergibt die aktuelle instanz von world an alle movableObjects (aktuell nur character)
  }

  run() {
    setInterval(() => {
      this.isPufferfishAgressive();
      this.checkCollisions();
      this.createShootObjects();
      this.showLifeStatusbarForEndboss();
      this.firstStage();
    }, 200);
    setInterval(() => {
      this.isCollidingWithOuterFramework();
    }, 1000 / 60);
  }

  createShootObjects() {
    if (this.keyboard.SPACE && this.character.attack > 7) {
      let bubble;
      if (!this.character.otherDirection) {
        bubble = new ShootableObject(
          this.character.x + 155,
          this.character.y + 135
        );
      } else {
        bubble = new ShootableObject(
          this.character.x + 25,
          this.character.y + 125
        );
      }
      this.shootableObjects.push(bubble);
      sounds.bubble.play();
    }
  }

  checkCollisions() {
    this.isCollidingWithEnemies();
    this.collisionWithCoins();
    this.collisionWithPoison();
    this.isBubbleCollidingWithEnemies();
    this.isSlapCollidingWithEnemies();
  }

  isBubbleCollidingWithEnemies() {
    this.shootableObjects.forEach((bubble, indexB) => {
      this.level.enemies.forEach((enemy, indexE) => {
        if (bubble.isColliding(enemy)) {
          if (enemy.species.includes('Jellyfish')) {
            this.bubbleBursts(indexB);
            this.killJellyfish(indexE);
          } else if (
            this.character.collectedPoison == 100 &&
            enemy.species == 'endboss'
          ) {
            this.bubbleBursts(indexB);
            this.hitEndboss(enemy);
          } else {
            this.bubbleBursts(indexB);
          }
        }
      });
    });
  }

  hitEndboss(enemy) {
    enemy.hit(10);
    sounds.endbossHurt.play();
    this.statusBar[3].setPercentage(enemy.energy);
  }

  showLifeStatusbarForEndboss() {
    if (this.character.x > 4000) {
      this.statusBar.push(
        new Statusbar(600, -10, 'life', this.level.enemies[0].energy)
      );
    }
  }

  isSlapCollidingWithEnemies() {
    this.level.enemies.forEach((enemy, index) => {
      if (
        !this.character.isColliding(enemy) &&
        this.character.isInFrontOf(enemy, 0, 0, 0, 50) &&
        this.level.enemies[index].species.includes('Pufferfish') &&
        this.keyboard.Q
      ) {
        this.killPufferfish(index);
        sounds.slap.play();
      }
    });
  }

  isCollidingWithEnemies() {
    this.level.enemies.forEach((enemy, index) => {
      if (this.character.isColliding(enemy, index) && !enemy.isKilled) {
        if (enemy.species == 'endboss') {
          this.character.hit(5);
        } else if (enemy.species == 'Jellyfish pink') {
          this.character.hit(2.5);
          this.character.electroHit = true;
          sounds.electroZap.play();
        } else if (enemy.species.includes('Jellyfish')) {
          this.character.hit(1.5);
        } else if (enemy.species.includes('Pufferfish')) {
          this.character.hit(0.5);
        }
        sounds.hurt.play();
      }
      this.statusBar[0].setPercentage(this.character.energy);
    });
  }

  isCollidingWithOuterFramework() {
    this.level.enemies.forEach((enemy) => {
      if (
        (this.isCollidingFramework(this.framework1, enemy) ||
          this.isCollidingFramework(this.framework2, enemy)) &&
        enemy.species.includes('Jellyfish')
      ) {
        enemy.otherDirection = !enemy.otherDirection;
      }
    });
  }

  isPufferfishAgressive() {
    this.level.enemies.forEach((enemy) => {
      if (
        enemy.species.includes('Pufferfish') &&
        this.character.isInFrontOf(enemy, 50, 50, 50, 50)
      ) {
        enemy.isAgressive = true;
        enemy.offset = { top: 0, right: 5, bottom: 0, left: 0 };
      } else {
        enemy.isAgressive = false;
        enemy.offset = { top: 0, right: 5, bottom: 10, left: 0 };
      }
    });
  }

  collisionWithCoins() {
    this.level.coins.forEach((coin, index) => {
      if (this.character.isColliding(coin, index)) {
        this.character.collectCoin();
        this.level.coins[index].collected = true;
        sounds.collectCoin.play();
        setTimeout(() => {
          this.level.coins.splice(index, 1);
        }, 150);
        this.statusBar[1].setPercentage(this.character.collectedCoins);
      }
    });
  }

  collisionWithPoison() {
    this.level.poisons.forEach((poison, index) => {
      if (this.character.isColliding(poison, index)) {
        this.character.collectPoison();
        this.level.poisons[index].collected = true;
        sounds.collectPoisonBottle.play();
        this.stageSolved();
        // setTimeout(() => {
        //   this.level.poisons.splice(index, 1);
        // }, 70);
        this.statusBar[2].setPercentage(this.character.collectedPoison);
      }
    });
  }

  stageSolved() {
    if (this.level.poisons[0].collected) {
      this.firstStageSolved = true;
    }
    if (this.level.poisons[2].collected) {
      this.secondStageSolved = true;
    }
  }

  firstStage() {
    if (this.firstStageSolved && this.level.barriers[1].y < 400) {
      this.level.barriers[1].y += 20;
      console.log(this.level.barriers[1].y);
    }
    if (this.secondStageSolved && this.level.barriers[6].y < 200) {
      this.level.barriers[6].y += 20;
      console.log(this.level.barriers[6].y);
    }
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // löscht alle objects zu beginn

    this.ctx.translate(this.camera_x, 0); //verschiebt den ctx (context) um camera_x nach links
    this.addObjectstoMap(this.level.backgroundObjects);
    this.addObjectstoMap(this.level.barriers);
    this.addToMap(this.character); //fügt den character hinzu
    this.addObjectstoMap(this.level.enemies); //fügt die enemies hinzu
    this.addObjectstoMap(this.shootableObjects); //fügt die bubbles hinzu
    this.addObjectstoMap(this.level.coins); //fügt die collectables hinzu
    this.addObjectstoMap(this.level.poisons); //fügt die collectables hinzu
    // Space for fixed objects
    this.ctx.translate(-this.camera_x, 0);
    this.addObjectstoMap(this.statusBar);
    this.ctx.translate(this.camera_x, 0); //fügt den character hinzu
    this.drawFrameForCollision(this.framework1);
    this.drawFrameForCollision(this.framework2);

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

  drawFrameForCollision(fw) {
    this.ctx.beginPath();
    this.ctx.rect(fw.x, fw.y, fw.w, fw.h);
    this.ctx.closePath();
    this.ctx.strokeStyle = 'transparent';
    this.ctx.stroke();
  }

  bubbleBursts(index) {
    this.shootableObjects.splice(index, 1);
    sounds.bubble_pop.play();
  }

  killJellyfish(index) {
    this.level.enemies[index].isKilled = true;
    this.level.enemies[index].applyUplift();
    sounds.deadJelly.play();
    setTimeout(() => {
      this.level.enemies.splice(index, 1);
    }, 2500);
  }

  killPufferfish(index) {
    this.level.enemies[index].isKilled = true;
    setTimeout(() => {
      this.level.enemies.splice(index, 1);
    }, 2500);
  }

  isCollidingFramework(fw, mo) {
    return (
      fw.x + fw.w > mo.x + mo.offset.left && // => right > left
      fw.y + fw.h > mo.y + mo.offset.top && // => top > bottom
      fw.x < mo.x + mo.width - mo.offset.right && // => left < right
      fw.y < mo.y + mo.height - mo.offset.bottom // => top < bottom
    );
  }
}
