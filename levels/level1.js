const level1 = new Level(
  [
    new Pufferfish('orange'),
    new Pufferfish('pink'),
    new Pufferfish('redblue'),
    new Endboss(),
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
  ],
  [
    new CollectableObject(200, 40, 40, 'coin'),
    new CollectableObject(400, 40, 40, 'coin'),
    new CollectableObject(250, 40, 40, 'coin'),
    new CollectableObject(2000, 40, 40, 'coin'),
    new CollectableObject(200, 40, 40, 'coin'),
    new CollectableObject(2200, 40, 40, 'coin'),
  ],
  [
    new CollectableObject(800, 60, 50, 'poisonBottle'),
    new CollectableObject(1300, 60, 50, 'poisonBottle'),
    new CollectableObject(600, 60, 50, 'poisonBottle'),
    new CollectableObject(300, 60, 50, 'poisonBottle'),
    new CollectableObject(1500, 60, 50, 'poisonBottle'),
  ]
);
