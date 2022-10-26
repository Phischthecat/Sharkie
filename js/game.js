let canvas;
let world;
let keyboard = new Keyboard();
let sounds = {
  swimming_sound: new Audio('audio/swim.mp3'),
  collectCoin_sound: new Audio('audio/coin.mp3'),
  bubble_sound: new Audio('audio/bubble.mp3'),
  collectPoisonBottle_sound: new Audio('audio/poison-bubble.mp3'),
  slap_sound: new Audio('audio/slap.mp3'),
  ambience_sound: new Audio('audio/underwater-ambience.mp3'),
  bubble_pop_sound: new Audio('audio/bubble-pop.mp3'),
  hurt_sound: new Audio('audio/hurt.mp3'),
  deadJelly_sound: new Audio('audio/deadJelly.mp3'),
};

function init() {
  canvas = document.getElementById('canvas');
  world = new World(canvas, keyboard); //neue Welt mit der Variable canvas (das HTML Element), damit wir in der Welt das canvas zu greifen können

  soundSetting();
  console.log('My Character is ', world.character);
  console.log('enemies are ', world.level.enemies);
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
  sounds.swimming_sound.volume = 0.2;
  sounds.collectCoin_sound.volume = 0.7;
  sounds.bubble_sound.volume = 0.3;
  sounds.collectPoisonBottle_sound.volume = 0.7;
  sounds.slap_sound.volume = 0.3;
  sounds.ambience_sound.volume = 0.3;
  sounds.bubble_pop_sound.volume = 0.3;
  sounds.hurt_sound.volume = 0.1;
  sounds.deadJelly_sound.volume = 1;
}
