let canvas;
let world;
let keyboard = new Keyboard();
let sounds = {
  swimming: new Audio('audio/swim.mp3'),
  collectCoin: new Audio('audio/coin.mp3'),
  bubble: new Audio('audio/bubble.mp3'),
  collectPoisonBottle: new Audio('audio/poison-bubble.mp3'),
  slap: new Audio('audio/slap.mp3'),
  ambience: new Audio('audio/underwater-ambience.mp3'),
  bubble_pop: new Audio('audio/bubble-pop.mp3'),
  hurt: new Audio('audio/hurt.mp3'),
  deadJelly: new Audio('audio/deadJelly.mp3'),
  endbossHurt: new Audio('audio/endboss_hurt.mp3'),
  endbossMusic: new Audio('audio/endboss_music.mp3'),
  electroZap: new Audio('audio/zap.mp3'),
};

function init() {
  canvas = document.getElementById('canvas');
  world = new World(canvas, keyboard); //neue Welt mit der Variable canvas (das HTML Element), damit wir in der Welt das canvas zu greifen können

  soundSetting();
  console.log('My Character is ', world.character);
  console.log('enemies are ', world.level.enemies);
  console.log('barriers are ', world.level.barriers);
}

window.addEventListener('keydown', (event) => {
  if (event.keyCode == 32) {
    keyboard.SPACE = true;
  }
  if (event.keyCode == 37) {
    keyboard.LEFT = true;
  }
  if (event.keyCode == 38) {
    keyboard.UP = true;
  }
  if (event.keyCode == 39) {
    keyboard.RIGHT = true;
  }
  if (event.keyCode == 40) {
    keyboard.DOWN = true;
  }

  if (event.keyCode == 69) {
    keyboard.E = true;
  }
  if (event.keyCode == 81) {
    keyboard.Q = true;
  }
});

window.addEventListener('keyup', (event) => {
  if (event.keyCode == 32) {
    keyboard.SPACE = false;
  }
  if (event.keyCode == 37) {
    keyboard.LEFT = false;
  }
  if (event.keyCode == 38) {
    keyboard.UP = false;
  }
  if (event.keyCode == 39) {
    keyboard.RIGHT = false;
  }
  if (event.keyCode == 40) {
    keyboard.DOWN = false;
  }
  if (event.keyCode == 69) {
    keyboard.E = false;
  }
  if (event.keyCode == 81) {
    keyboard.Q = false;
  }

  world.character.currentImage = 0;
  world.character.attack = 0;
});

function soundSetting() {
  sounds.swimming.volume = 0.2;
  sounds.collectCoin.volume = 0.7;
  sounds.bubble.volume = 0.3;
  sounds.collectPoisonBottle.volume = 0.7;
  sounds.slap.volume = 0.3;
  sounds.ambience.volume = 0.3;
  sounds.ambience.loop = true;
  sounds.bubble_pop.volume = 0.3;
  sounds.hurt.volume = 0.1;
  sounds.endbossHurt.volume = 0.05;
  sounds.deadJelly.volume = 1;
  sounds.endbossHurt.volume = 0.3;
  sounds.endbossMusic.volume = 0.3;
  sounds.endbossMusic.loop = true;
  sounds.electroZap.volume = 0.3;
}
