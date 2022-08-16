/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function randomStuff(max) {
  return Math.floor(Math.random() * max);
}

window.onload = function() {
  //write your code here
  const signTop = document.querySelector(".sign-top");
  const cardText = document.querySelector(".card-t");
  const signBot = document.querySelector(".sign-bot");

  let number = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let pinta = ["♦", "♥", "♠", "♣"];

  let blackOrRed = randomStuff(4);
  let numberRandom = number[randomStuff(number.length)];
  let pintaRandom = pinta[blackOrRed];

  if (blackOrRed == 0 || blackOrRed == 1) {
    signTop.classList.add("red");
    signBot.classList.add("red");
  }

  signTop.textContent = pintaRandom;
  cardText.textContent = numberRandom;
  signBot.textContent = pintaRandom;
};
