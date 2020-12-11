"use strict"
let outputSpeech = document.getElementById('outputSpeech');
let randImg = document.getElementById('randImg');
let knop0 = document.getElementById('knop0');
let knop1 = document.getElementById('knop1');

const onderwerp = ["Wouter", "Joost", "Giel", "Hidde"];
const werkwoord = ["likt", "is", "stinkt naar", "was"];
const restwoord = ["papier", "raar", "een pannekoek",  "een appel"];

let plaatjes = ["https://cdn.discordapp.com/emojis/720648833079443506.png?v=1", "https://cdn.discordapp.com/emojis/735313106246565941.png?v=1", "https://cdn.discordapp.com/emojis/722206216360689674.png?v=1", "https://cdn.discordapp.com/emojis/747298464379174964.png?v=1"]
let arrayLengthOnd = onderwerp.length;
let arrayLengthWW = werkwoord.length;
let arrayLengthRW = restwoord.length;


knop0.addEventListener('click', function(){
  main();
})

knop1.addEventListener('click', function(){
  reset();
})
function main(){
  let textString = sentence();
  outputSpeech.innerHTML = textString;
  sayWords(textString);
  selectImg();
}
function reset(){
  randImg.src = "https://www.ma-web.nl/static/vector/Logo_blok.svg";
  outputSpeech.innerHTML = "...";
}

function randomizer(range = 1){
  return Math.floor((Math.random() * range));
}

function sentence(){
  let index0 = randomizer(arrayLengthOnd);
  let woord1 = onderwerp[index0];
  let index1 = randomizer(arrayLengthWW);
  let woord2 = werkwoord[index1];
  let index2 = randomizer(arrayLengthRW);
  let woord3 = restwoord[index2];
  let outputString = woord1 + " " + woord2 + " " + woord3;
  return outputString;
}

function sayWords (textString) {
  let message = new SpeechSynthesisUtterance(textString);
  let voices = window.speechSynthesis.getVoices();
  message.voice = voices[1];
  message.pitch = 1;
  message.rate = 1;
  window.speechSynthesis.speak(message);
}

function selectImg(){
  let index = randomizer(plaatjes.length);
  randImg.src = plaatjes[index];
}
