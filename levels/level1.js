let level1;

function initLevel() {
  level1 = new Level(
    [
      new Jellyfish(350, 200, 'lila'),
      new Pufferfish(800, 135, 10, 'green'),
      new Pufferfish(800, 265, 10, 'redblue'),
      new Jellyfish(1150, 200, 'yellow'),
      new Jellyfish(1250, 200, 'yellow'),
      new Pufferfish(1600, 20, 11, 'pink'),
      new Pufferfish(1600, 115, 11, 'pink'),
      new Pufferfish(1600, 210, 11, 'pink'),
      new Pufferfish(1600, 305, 11, 'pink'),
      new Jellyfish(3000, 360, 'pink'),
      new Jellyfish(3100, 320, 'green'),
      new Jellyfish(3200, 280, 'pink'),
      new Jellyfish(3300, 240, 'green'),
      new Jellyfish(3400, 200, 'pink'),
      new Jellyfish(3500, 160, 'green'),
      new Jellyfish(3600, 120, 'pink'),
      new Jellyfish(3700, 80, 'green'),
      new Jellyfish(3800, 40, 'pink'),
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

      new BackgroundObjects(
        'img/3. Background/Layers/5. Water/L1.png',
        719 * 2
      ),
      new BackgroundObjects(
        'img/3. Background/Layers/4.Fondo 2/L1.png',
        719 * 2
      ),
      new BackgroundObjects(
        'img/3. Background/Layers/3.Fondo 1/L1.png',
        719 * 2
      ),
      new BackgroundObjects(
        'img/3. Background/Layers/2. Floor/L1.png',
        719 * 2
      ),
      new BackgroundObjects('img/3. Background/Layers/1. Light/1.png', 719 * 2),

      new BackgroundObjects(
        'img/3. Background/Layers/5. Water/L2.png',
        719 * 3
      ),
      new BackgroundObjects(
        'img/3. Background/Layers/4.Fondo 2/L2.png',
        719 * 3
      ),
      new BackgroundObjects(
        'img/3. Background/Layers/3.Fondo 1/L2.png',
        719 * 3
      ),
      new BackgroundObjects(
        'img/3. Background/Layers/2. Floor/L2.png',
        719 * 3
      ),
      new BackgroundObjects('img/3. Background/Layers/1. Light/2.png', 719 * 3),

      new BackgroundObjects(
        'img/3. Background/Layers/5. Water/L1.png',
        719 * 4
      ),
      new BackgroundObjects(
        'img/3. Background/Layers/4.Fondo 2/L1.png',
        719 * 4
      ),
      new BackgroundObjects(
        'img/3. Background/Layers/3.Fondo 1/L1.png',
        719 * 4
      ),
      new BackgroundObjects(
        'img/3. Background/Layers/2. Floor/L1.png',
        719 * 4
      ),
      new BackgroundObjects('img/3. Background/Layers/1. Light/1.png', 719 * 4),

      new BackgroundObjects(
        'img/3. Background/Layers/5. Water/L2.png',
        719 * 5
      ),
      new BackgroundObjects(
        'img/3. Background/Layers/4.Fondo 2/L2.png',
        719 * 5
      ),
      new BackgroundObjects(
        'img/3. Background/Layers/3.Fondo 1/L2.png',
        719 * 5
      ),
      new BackgroundObjects(
        'img/3. Background/Layers/2. Floor/L2.png',
        719 * 5
      ),
      new BackgroundObjects('img/3. Background/Layers/1. Light/2.png', 719 * 5),

      new BackgroundObjects(
        'img/3. Background/Layers/5. Water/L1.png',
        719 * 6
      ),
      new BackgroundObjects(
        'img/3. Background/Layers/4.Fondo 2/L1.png',
        719 * 6
      ),
      new BackgroundObjects(
        'img/3. Background/Layers/3.Fondo 1/L1.png',
        719 * 6
      ),
      new BackgroundObjects(
        'img/3. Background/Layers/2. Floor/L1.png',
        719 * 6
      ),
      new BackgroundObjects('img/3. Background/Layers/1. Light/1.png', 719 * 6),

      new BackgroundObjects(
        'img/3. Background/Layers/5. Water/L2.png',
        719 * 7
      ),
      new BackgroundObjects(
        'img/3. Background/Layers/4.Fondo 2/L2.png',
        719 * 7
      ),
      new BackgroundObjects(
        'img/3. Background/Layers/3.Fondo 1/L2.png',
        719 * 7
      ),
      new BackgroundObjects(
        'img/3. Background/Layers/2. Floor/L2.png',
        719 * 7
      ),
      new BackgroundObjects('img/3. Background/Layers/1. Light/2.png', 719 * 7),
    ],
    [
      new CollectableObject(350, 20, 40, 40, 'coin'),
      new CollectableObject(400, 20, 40, 40, 'coin'),
      new CollectableObject(750, 200, 40, 40, 'coin'),
      new CollectableObject(810, 135, 40, 40, 'coin'),
      new CollectableObject(810, 265, 40, 40, 'coin'),
      new CollectableObject(870, 200, 40, 40, 'coin'),
      new CollectableObject(1750, 20, 40, 40, 'coin'),
      new CollectableObject(2000, 140, 40, 40, 'coin'),
      new CollectableObject(2750, 50, 40, 40, 'coin'),
      new CollectableObject(2900, 400, 40, 40, 'coin'),
    ],
    [
      new CollectableObject(230, 310, 60, 50, 'poisonBottle'),
      new CollectableObject(800, 195, 60, 50, 'poisonBottle'),
      new CollectableObject(1750, 400, 60, 50, 'poisonBottle'),
      new CollectableObject(2000, 380, 60, 50, 'poisonBottle'),
      new CollectableObject(2300, 95, 60, 50, 'poisonBottle'),
      new CollectableObject(2600, 400, 60, 50, 'poisonBottle'),
      new CollectableObject(3100, 220, 60, 50, 'poisonBottle'),
      new CollectableObject(3300, 220, 60, 50, 'poisonBottle'),
      new CollectableObject(3500, 220, 60, 50, 'poisonBottle'),
      new CollectableObject(3700, 220, 60, 50, 'poisonBottle'),
    ],
    [
      new Barrier(450, 700, 150, 'up', 'top'),
      new Barrier(420, 150, 480, 'down', 'pillar'),
      new Barrier(450, 700, 150, 'down', 'bottom'),
      new Barrier(1350, 350, 150, 'down', 'rock'),
      new Barrier(1850, 1100, 150, 'up', 'top'),
      new Barrier(1850, 800, 50, 'down', 'bottom'),
      new Barrier(1850, 150, 480, 'down', 'pillar'),
      new Barrier(2150, 150, 330, 'up', 'pillar'),
      new Barrier(2450, 150, 280, 'down', 'pillar'),
      new Barrier(2800, 150, 360, 'up', 'pillar'),
      new Barrier(3900, 150, 280, 'down', 'pillar'),
      new Barrier(3900, 150, 280, 'up', 'pillar'),
    ]
  );
}
