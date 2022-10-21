class Level {
  enemies;
  backgroundObjects;
  coins;
  poisons;
  level_end_x = 2100;

  constructor(enemies, backgroundObjects, coins, poisons) {
    this.enemies = enemies;
    this.backgroundObjects = backgroundObjects;
    this.coins = coins;
    this.poisons = poisons;
  }
}
