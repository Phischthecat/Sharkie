const level1 = new Level(
  [
    new Endboss(),
    new Jellyfish(350, 'lila'),
    new Jellyfish(1150, 'lila'),
    new Pufferfish(800, 135, 'green'),
    new Pufferfish(800, 265, 'redblue'),
    // new Pufferfish(800, 190, 'redblue'),
    // new Pufferfish(800, 240, 'green'),
    new Jellyfish(3700, 'pink'),
    new Jellyfish(3800, 'pink'),
  ],
  [
    new BackgroundObjects('img/3. Background/Layers/5. Water/L2.png', -719),
    new BackgroundObjects('img/3. Background/Layers/4.Fondo 2/L2.png', -719),
    new BackgroundObjects('img/3. Background/Layers/3.Fondo 1/L2.png', -719),
    new BackgroundObjects('img/3. Background/Layers/2. Floor/L2.png', -719),
    new BackgroundObjects('img/3. Background/Layers/1. Light/2.png', -719),

    new BackgroundObjects('img/3. Background/Layers/5. Water/L1.png', 0),
    new BackgroundObjects('img/3. Background/Layers/4.Fondo 2/L1.png', 0),
    new BackgroundObjects('img/3. Background/Layers/3.Fondo 1/L1.png', 0),
    new BackgroundObjects('img/3. Background/Layers/2. Floor/L1.png', 0),
    new BackgroundObjects('img/3. Background/Layers/1. Light/1.png', 0),

    new BackgroundObjects('img/3. Background/Layers/5. Water/L2.png', 719),
    new BackgroundObjects('img/3. Background/Layers/4.Fondo 2/L2.png', 719),
    new BackgroundObjects('img/3. Background/Layers/3.Fondo 1/L2.png', 719),
    new BackgroundObjects('img/3. Background/Layers/2. Floor/L2.png', 719),
    new BackgroundObjects('img/3. Background/Layers/1. Light/2.png', 719),

    new BackgroundObjects('img/3. Background/Layers/5. Water/L1.png', 719 * 2),
    new BackgroundObjects('img/3. Background/Layers/4.Fondo 2/L1.png', 719 * 2),
    new BackgroundObjects('img/3. Background/Layers/3.Fondo 1/L1.png', 719 * 2),
    new BackgroundObjects('img/3. Background/Layers/2. Floor/L1.png', 719 * 2),
    new BackgroundObjects('img/3. Background/Layers/1. Light/1.png', 719 * 2),

    new BackgroundObjects('img/3. Background/Layers/5. Water/L2.png', 719 * 3),
    new BackgroundObjects('img/3. Background/Layers/4.Fondo 2/L2.png', 719 * 3),
    new BackgroundObjects('img/3. Background/Layers/3.Fondo 1/L2.png', 719 * 3),
    new BackgroundObjects('img/3. Background/Layers/2. Floor/L2.png', 719 * 3),
    new BackgroundObjects('img/3. Background/Layers/1. Light/2.png', 719 * 3),

    new BackgroundObjects('img/3. Background/Layers/5. Water/L1.png', 719 * 4),
    new BackgroundObjects('img/3. Background/Layers/4.Fondo 2/L1.png', 719 * 4),
    new BackgroundObjects('img/3. Background/Layers/3.Fondo 1/L1.png', 719 * 4),
    new BackgroundObjects('img/3. Background/Layers/2. Floor/L1.png', 719 * 4),
    new BackgroundObjects('img/3. Background/Layers/1. Light/1.png', 719 * 4),

    new BackgroundObjects('img/3. Background/Layers/5. Water/L2.png', 719 * 5),
    new BackgroundObjects('img/3. Background/Layers/4.Fondo 2/L2.png', 719 * 5),
    new BackgroundObjects('img/3. Background/Layers/3.Fondo 1/L2.png', 719 * 5),
    new BackgroundObjects('img/3. Background/Layers/2. Floor/L2.png', 719 * 5),
    new BackgroundObjects('img/3. Background/Layers/1. Light/2.png', 719 * 5),

    new BackgroundObjects('img/3. Background/Layers/5. Water/L1.png', 719 * 6),
    new BackgroundObjects('img/3. Background/Layers/4.Fondo 2/L1.png', 719 * 6),
    new BackgroundObjects('img/3. Background/Layers/3.Fondo 1/L1.png', 719 * 6),
    new BackgroundObjects('img/3. Background/Layers/2. Floor/L1.png', 719 * 6),
    new BackgroundObjects('img/3. Background/Layers/1. Light/1.png', 719 * 6),

    new BackgroundObjects('img/3. Background/Layers/5. Water/L2.png', 719 * 7),
    new BackgroundObjects('img/3. Background/Layers/4.Fondo 2/L2.png', 719 * 7),
    new BackgroundObjects('img/3. Background/Layers/3.Fondo 1/L2.png', 719 * 7),
    new BackgroundObjects('img/3. Background/Layers/2. Floor/L2.png', 719 * 7),
    new BackgroundObjects('img/3. Background/Layers/1. Light/2.png', 719 * 7),
  ],
  [
    new CollectableObject(200, 40, 40, 'coin'),
    // new CollectableObject(400, 40, 40, 'coin'),
    // new CollectableObject(250, 40, 40, 'coin'),
    // new CollectableObject(2000, 40, 40, 'coin'),
    // new CollectableObject(200, 40, 40, 'coin'),
    // new CollectableObject(2200, 40, 40, 'coin'),
  ],
  [
    new CollectableObject(800, 60, 50, 'poisonBottle'),
    // new CollectableObject(1300, 60, 50, 'poisonBottle'),
    // new CollectableObject(600, 60, 50, 'poisonBottle'),
    // new CollectableObject(300, 60, 50, 'poisonBottle'),
    // new CollectableObject(1500, 60, 50, 'poisonBottle'),
  ],
  [
    new Barrier(450, 0, 700, 150, 'top'),
    new Barrier(450, 340, 700, 150, 'bottom'),

    new Barrier(3900, 150, 150, 380, 'pillar'),
  ]
);
