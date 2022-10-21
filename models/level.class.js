class Level {
  enemies;
  backgroundObjects;
  collectableObjects;
  level_end_x = 2100;

  constructor(enemies, backgroundObjects, collectableObjects) {
    this.enemies = enemies;
    this.backgroundObjects = backgroundObjects;
    this.collectableObjects = collectableObjects;
  }
}
