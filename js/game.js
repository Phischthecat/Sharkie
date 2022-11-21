let canvas;
let world;
let keyboard = new Keyboard();
let allIntervals = [];
let gameOver = false;
let winner = false;
let sound = true;
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
  fallingRock: new Audio('audio/falling-rocks.mp3'),
  movingPillar: new Audio('audio/moving-pillar.mp3'),
  gameOver: new Audio('audio/gameOver.mp3'),
  win: new Audio('audio/win.mp3'),
};

/**
 * initialises the game
 */
function init() {
  canvas = document.getElementById('canvas');
  initLevel();
  world = new World(canvas, keyboard); //neue Welt mit der Variable canvas (das HTML Element), damit wir in der Welt das canvas zu greifen können
  soundSetting();
}

/**
 * restarts the game
 */
function restart() {
  gameOver = false;
  winner = false;
  sound = true;
  document.getElementById('loose').classList.add('d-none');
  document.getElementById('win').classList.add('d-none');
}

/**
 * auxiliary function to get the ids of the intervals and to set the interval
 * @param {function} fn takes a function
 * @param {number} time takes a time
 */
function setStoppableInterval(fn, time) {
  let idIntervall = setInterval(fn, time);
  allIntervals.push(idIntervall);
}

/**
 * clears all intervals
 */
function stopGame() {
  allIntervals.forEach(clearInterval);
}

/**
 * starts the game and hides the start screen
 */
async function start() {
  await init();
  document.querySelector('.startScreen').classList.add('slide-out-fwd-center');
  document.getElementById('btnsLeft').classList.remove('d-none');
  document.getElementById('btnsRight').classList.remove('d-none');
  setTimeout(() => {
    document.querySelector('.startScreen').classList.add('d-none');
  }, 200);
}

/**
 * opens/ closes the information to the game
 */
function introduction() {
  document.getElementById('pop-up').classList.toggle('d-none');
  document.body.classList.toggle('overflow-auto');
}

/**
 * shows the endscreen
 */
function endScreen() {
  lose();
  win();
}

/**
 * shows the lose endscreen, stops the music and plays the gameOver music
 */
function lose() {
  if (gameOver) {
    sounds.ambience.pause();
    sounds.endbossMusic.pause();
    sounds.gameOver.play();
    stopGame();
    document.getElementById('loose').classList.remove('d-none');
    document
      .querySelector('.startScreen')
      .classList.remove('slide-out-fwd-center', 'd-none');
  }
}

/**
 * shows the win endscreen, stops the music and plays the win music
 */
function win() {
  if (winner) {
    sounds.endbossMusic.pause();
    sounds.endbossHurt.pause();
    sounds.ambience.pause();
    sounds.win.play();
    stopGame();
    document.getElementById('win').classList.remove('d-none');
    document
      .querySelector('.startScreen')
      .classList.remove('slide-out-fwd-center', 'd-none');
  }
}

/**
 * turns the background music on
 */
function soundOn() {
  document.getElementById('sound').onclick = soundOff;
  document
    .getElementById('soundIcon')
    .classList.replace('fa-volume-xmark', 'fa-volume-high');
  sound = true;
}

/**
 * turns the background music off
 */
function soundOff() {
  document.getElementById('sound').onclick = soundOn;
  document
    .getElementById('soundIcon')
    .classList.replace('fa-volume-high', 'fa-volume-xmark');
  sound = false;
}

/**
 * sets the volume of the game sounds
 */
function soundSetting() {
  sounds.ambience.volume = 0.5;
  sounds.ambience.loop = true;
  sounds.swimming.volume = 0.15;
  sounds.collectCoin.volume = 0.7;
  sounds.collectPoisonBottle.volume = 0.9;
  sounds.bubble.volume = 0.3;
  sounds.slap.volume = 0.2;
  sounds.bubble_pop.volume = 0.3;
  sounds.hurt.volume = 0.1;
  sounds.endbossHurt.volume = 0.05;
  sounds.deadJelly.volume = 1;
  sounds.endbossHurt.volume = 0.3;
  sounds.endbossMusic.volume = 0.3;
  sounds.endbossMusic.loop = true;
  sounds.electroZap.volume = 0.1;
  sounds.fallingRock.volume = 0.2;
  sounds.movingPillar.volume = 0.4;
  sounds.gameOver.volume = 0.3;
  sounds.win.volume = 0.3;
}
