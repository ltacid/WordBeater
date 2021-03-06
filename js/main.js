window.addEventListener('load', init);

// Globals

// Available Levels
const levels = {
  easy: 5,
  medium: 3,
  hard: 2,
}

// To change level
const currentLevel = levels.easy;

let time = currentLevel;
// let time = 0;
// let currentLevel;

let score = 0;
let isPlaying;

// DOM Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');
const difficultyLevel = document.querySelector('#difficulty-level');
const difficulty = document.querySelector('#difficulty');

const words = [
  'hat',
  'river',
  'lucky',
  'statue',
  'generate',
  'stubborn',
  'cocktail',
  'runaway',
  'joke',
  'developer',
  'establishment',
  'hero',
  'javascript',
  'nutrition',
  'revolver',
  'echo',
  'sibblings',
  'investigate',
  'horrendous',
  'symptom',
  'laughter',
  'magic',
  'master',
  'space',
  'definition',
];

// Initialize Game
function init() {
  // Set difficulty Level
  difficultyLevel.addEventListener('change', setDifficultyLevel)
  // Show numbers of seconds in UI
  seconds.innerHTML = currentLevel;
  // Load word from array
  showWord(words);
  // Start matching on word input
  wordInput.addEventListener('input', startMatch);
  // Call countdown every second
  setInterval(countdown, 1000);
  // Check game status
  setInterval(checkStatus, 50);

}

// Set Difficulty Level
function setDifficultyLevel() {
  console.log(difficultyLevel.value);
  console.log(difficultyLevel.options[difficultyLevel.selectedIndex].innerHTML);

  if(difficultyLevel.selectedIndex > 0){
    difficulty.innerHTML = difficultyLevel.options[difficultyLevel.selectedIndex].innerHTML;
    seconds.innerHTML = difficultyLevel.value;
  } else {
    difficulty.innerHTML = '';
    seconds.innerHTML = 0;
  }

  // time = difficultyLevel.value;
  // currentLevel = difficultyLevel.options[difficultyLevel.selectedIndex].innerHTML;
  // set difficulty
  // set seconds
  // set currentLevel
  // set time
  // to be equal to difficultyLevel.value
  // or difficultyLevel.options[difficultyLevel.selectedIndex].innerHTML
}

// Start Match
function startMatch() {
  if(matchWords()) {
    isPlaying = true;
    time = currentLevel + 1;
    showWord(words);
    wordInput.value = '';
    score++;
  }

  // If score is -1, display 0
  if(score === -1) {
    scoreDisplay.innerHTML = 0;

  } else {    
    scoreDisplay.innerHTML = score;
  }
}

// Match currentWord to wordInput
function matchWords() {
  if(wordInput.value === currentWord.innerHTML) {
    message.innerHTML = 'Correct!!!';
    return true;
  } else {
    message.innerHTML = '';
    return false;
  }
}

// Pick and show random word
function showWord(words) {
  // Generate random array index
  const randIndex = Math.floor(Math.random() * words.length);
  // Output a random word.
  currentWord.innerHTML = words[randIndex];
}

// Countdown Timer
function countdown() {
  // Make sure that time is not run out
  if(time > 0) {
    // Decrement
    time--;
  } else if(time === 0) {
    // Game is Over
    isPlaying = false;
  }

  // Show Time
  timeDisplay.innerHTML = time;
}

// Check game status
function checkStatus() {
  if(!isPlaying && time === 0) {
    message.innerHTML = 'Game Over!!!';
    score = -1;
  }
}