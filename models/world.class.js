class World {
  character = new Character();
  framework1 = { x: -100, y: 0, w: 5000, h: 20 };
  framework2 = { x: -100, y: 460, w: 5000, h: 20 };
  level = level1;
  canvas;
  ctx;
  keyboard;
  camera_x = 0;
  firstStageSolved = false;
  secondStageSolved = false;
  thirdStageSolved = false;
  shootableObjects = [];
  statusBar = [
    new Statusbar(20, -10, 150, 50, 'life', 100),
    new Statusbar(20, 40, 150, 50, 'coins', 0),
    new Statusbar(20, 90, 150, 50, 'poison', 0),
  ];

  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext('2d');
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw(); // "malt" die welt
    this.setWorld();
    this.run();
    this.backgroundSound();
  }

  /**
   * passes the world on to the character
   */
  setWorld() {
    this.character.world = this; //übergibt die aktuelle instanz von world an alle movableObjects (aktuell nur character)
  }

  /**
   * plays all the important functions that need to be constantly checked
   */
  run() {
    setStoppableInterval(() => {
      this.createShootObjects();
    }, 80);
    setStoppableInterval(() => {
      endScreen();
      this.isPufferfishAgressive();
      this.checkCollisions();
      this.showLifeStatusbarForEndboss();
      this.allStages();
    }, 150);
    setStoppableInterval(() => {
      this.isCollidingWithOuterFramework();
    }, 1000 / 60);
  }

  /**
   * plays the background sound
   */
  backgroundSound() {
    setStoppableInterval(() => {
      if (sound && this.character.x < 4000) {
        sounds.ambience.play();
      } else {
        sounds.ambience.pause();
      }
    }, 1000 / 60);
  }

  /**
   * creates a bubble
   */
  createShootObjects() {
    if (this.character.attack == this.character.IMAGES_BUBBLETRAP.length) {
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

  /**
   * checks the most diverse collisions
   */
  checkCollisions() {
    this.isCollidingWithEnemies();
    this.collisionWithCoins();
    this.collisionWithPoison();
    this.isBubbleCollidingWithEnemies();
    this.isSlapCollidingWithEnemies();
  }

  /**
   * checks if a bubble collides with something
   */
  isBubbleCollidingWithEnemies() {
    this.shootableObjects.forEach((bubble, indexB) => {
      this.level.enemies.forEach((enemy, indexE) => {
        if (bubble.isColliding(enemy)) {
          this.bubbleBursts(indexB);
          this.killJellyfish(enemy, indexE);
          this.hitEndboss(enemy);
        }
      });
    });
  }

  /**
   * monitors whether the end boss has been hit
   * @param {object} enemy collided enemy
   */
  hitEndboss(enemy) {
    if (this.character.collectedPoison == 100 && enemy.species == 'endboss') {
      enemy.hit(10);
      sounds.endbossHurt.play();
      this.statusBar[3].setPercentage(enemy.energy);
    }
  }

  /**
   * shows the life statusbar for the end boss
   */
  showLifeStatusbarForEndboss() {
    if (this.character.x > 4000) {
      let endboss = this.level.enemies.find((e) => e.species == 'endboss');
      this.statusBar.push(
        new Statusbar(260, 400, 200, 75, 'life', endboss.energy)
      );
    }
  }

  /**
   * checks whether an enemy has been slapped
   */
  isSlapCollidingWithEnemies() {
    this.level.enemies.forEach((enemy, index) => {
      if (
        !this.character.isHurt() &&
        this.character.isInFrontOf(enemy, 0, 0, 0, 50) &&
        enemy.species.includes('Pufferfish') &&
        this.character.slap
      ) {
        this.killPufferfish(index);
        sounds.slap.play();
      }
    });
  }

  /**
   * checks whether the character collides with an enemy
   */
  isCollidingWithEnemies() {
    this.level.enemies.forEach((enemy, index) => {
      if (this.character.isColliding(enemy, index) && !enemy.isKilled) {
        this.collisionBySpecies(enemy);
        sounds.hurt.play();
      }
      this.statusBar[0].setPercentage(this.character.energy);
    });
  }

  /**
   * awards the hit points on the basis of the collided enemy
   * @param {object} enemy collided enemy
   */
  collisionBySpecies(enemy) {
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
  }

  /**
   * checks whether the jellyfishs collide with the outer frames
   */
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

  /**
   * checks whether the pufferfish become aggressive
   */
  isPufferfishAgressive() {
    this.level.enemies.forEach((enemy) => {
      if (
        enemy.species.includes('Pufferfish') &&
        this.character.isInFrontOf(enemy, 50, 50, 50, 50)
      ) {
        enemy.isAgressive = true;
        enemy.offset.bottom = 0;
      } else {
        enemy.isAgressive = false;
        enemy.offset.bottom = 10;
      }
    });
  }

  /**
   * checks whether the character collects a coin
   */
  collisionWithCoins() {
    this.level.coins.forEach((coin, index) => {
      if (this.character.isColliding(coin, index)) {
        this.character.collectCoin();
        this.level.coins[index].collected = true;
        sounds.collectCoin.play();
        this.statusBar[1].setPercentage(this.character.collectedCoins);
      }
    });
  }

  /**
   * checks whether the character collects a poison bottle
   */
  collisionWithPoison() {
    this.level.poisons.forEach((poison, index) => {
      if (this.character.isColliding(poison, index)) {
        this.character.collectPoison();
        this.level.poisons[index].collected = true;
        sounds.collectPoisonBottle.play();
        this.stageSolved();
        this.statusBar[2].setPercentage(this.character.collectedPoison);
      }
    });
  }

  /**
   * checks whether the player has collected the required poison bottles to unlock the next stage
   */
  stageSolved() {
    if (this.level.poisons[0].collected) {
      this.firstStageSolved = true;
    }
    if (this.level.poisons[1].collected && this.level.poisons[2].collected) {
      this.secondStageSolved = true;
    }
    if (this.thirdStagePoisonBottles()) {
      this.thirdStageSolved = true;
    }
  }

  /**
   * Poison bottle to be collected from stage three
   * @returns boolean
   */
  thirdStagePoisonBottles() {
    return (
      this.level.poisons[3].collected &&
      this.level.poisons[4].collected &&
      this.level.poisons[5].collected &&
      this.level.poisons[6].collected &&
      this.level.poisons[7].collected &&
      this.level.poisons[8].collected &&
      this.level.poisons[9].collected
    );
  }

  /**
   * all four stages
   */
  allStages() {
    this.firstStage();
    this.secondStage();
    this.thirdStage();
    this.endbossStage();
  }

  /**
   * move the pillar down when the first stage is completed
   */
  firstStage() {
    if (this.firstStageSolved && this.level.barriers[1].y < 400) {
      this.level.barriers[1].y += 20;
      sounds.fallingRock.play();
      sounds.movingPillar.play();
    }
  }

  /**
   * move the pillar down when the second stage is completed
   */
  secondStage() {
    if (this.secondStageSolved && this.level.barriers[6].y < 200) {
      this.level.barriers[6].y += 20;
      sounds.fallingRock.play();
      sounds.movingPillar.play();
    }
  }

  /**
   * move the pillars up and down when the second stage is completed
   */
  thirdStage() {
    if (
      this.thirdStageSolved &&
      this.level.barriers[10].y < 290 &&
      !this.level.enemies[this.level.enemies.length - 1].hadFirstContact
    ) {
      this.level.barriers[10].y += 5;
      this.level.barriers[11].y -= 5;
      sounds.fallingRock.play();
      sounds.movingPillar.play();
    }
  }

  /**
   * closes the entrance behind the character
   */
  endbossStage() {
    if (
      this.level.enemies[this.level.enemies.length - 1].hadFirstContact &&
      this.level.barriers[10].y > 220
    ) {
      this.level.barriers[10].y -= 20;
      this.level.barriers[11].y += 20;
      this.soundFadeOut('fallingRock');
      this.soundFadeOut('movingPillar');
    }
  }

  /**
   * Slowly turns down the sound
   * @param {string} soundEffect
   */
  soundFadeOut(soundEffect) {
    sounds[soundEffect].play();
    let fadeOut = setStoppableInterval(() => {
      if (sounds[soundEffect].volume > 0.01) {
        sounds[soundEffect].volume -= 0.01;
      } else {
        clearInterval(fadeOut);
        sounds[soundEffect].pause();
      }
    }, 200);
  }

  /**
   * draws all objects on the canvas
   */
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

  /**
   * draws the object
   * @param {object} mo movable object
   */
  addToMap(mo) {
    this.flipImage(mo);
    mo.draw(this.ctx);
    this.flipImageBack(mo);
  }

  /**
   * draws each object of the array
   * @param {array} objects array of objects
   */
  addObjectstoMap(objects) {
    objects.forEach((object) => {
      this.addToMap(object);
    });
  }

  /**
   * flips the image by changing the direction
   * @param {object} mo movable object
   */
  flipImage(mo) {
    if (mo.otherDirection) {
      this.ctx.save();
      this.ctx.translate(mo.width, 0);
      this.ctx.scale(-1, 1);
      mo.x = mo.x * -1;
    }
  }

  /**
   * flips the image back by changing the direction
   * @param {object} mo movable object
   */
  flipImageBack(mo) {
    if (mo.otherDirection) {
      mo.x = mo.x * -1;
      this.ctx.restore();
    }
  }

  /**
   * draws unvisible outer frameworks
   * @param {object} fw object of frameworks
   */
  drawFrameForCollision(fw) {
    this.ctx.beginPath();
    this.ctx.rect(fw.x, fw.y, fw.w, fw.h);
    this.ctx.closePath();
    this.ctx.strokeStyle = 'transparent';
    this.ctx.stroke();
  }

  /**
   * bursts the bubble
   * @param {number} index number of bubble
   */
  bubbleBursts(index) {
    this.shootableObjects.splice(index, 1);
    sounds.bubble_pop.play();
  }

  /**
   * when the bubble encounters a jellyfish, it is caught and rises to the top
   * @param {object} enemy collided enemy
   * @param {number} index number of jellyfish
   */
  killJellyfish(enemy, index) {
    if (enemy.species.includes('Jellyfish')) {
      enemy.isKilled = true;
      enemy.applyUplift();
      sounds.deadJelly.play();
      setTimeout(() => {
        this.level.enemies.splice(index, 1);
      }, 2500);
    }
  }

  /**
   * if pufferfish hit by fin slap, he is shot out of the top right of the screen
   * @param {number} index number of pufferfish
   */
  killPufferfish(index) {
    this.level.enemies[index].isKilled = true;
    setTimeout(() => {
      this.level.enemies.splice(index, 1);
    }, 2500);
  }

  /**
   * checks if something collides with the framework
   * @param {object} fw object of frameworks
   * @param {object} mo movable object
   * @returns boolean
   */
  isCollidingFramework(fw, mo) {
    return (
      fw.x + fw.w > mo.x + mo.offset.left && // => right > left
      fw.y + fw.h > mo.y + mo.offset.top && // => top > bottom
      fw.x < mo.x + mo.width - mo.offset.right && // => left < right
      fw.y < mo.y + mo.height - mo.offset.bottom // => top < bottom
    );
  }
}
