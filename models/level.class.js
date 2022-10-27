class Level {
  enemies;
  backgroundObjects;
  coins;
  poisons;
  barriers;
  level_end_x = 2100;

  constructor(enemies, backgroundObjects, coins, poisons, barriers) {
    this.enemies = enemies;
    this.backgroundObjects = backgroundObjects;
    this.coins = coins;
    this.poisons = poisons;
    this.barriers = barriers;
  }
}
