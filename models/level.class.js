class Level {
  enemies;
  backgroundObjects;
  coins;
  poisons;
  barriers;
  level_start_x = 0;
  level_end_x = 5000;

  constructor(enemies, backgroundObjects, coins, poisons, barriers) {
    this.enemies = enemies;
    this.backgroundObjects = backgroundObjects;
    this.coins = coins;
    this.poisons = poisons;
    this.barriers = barriers;
  }
}
