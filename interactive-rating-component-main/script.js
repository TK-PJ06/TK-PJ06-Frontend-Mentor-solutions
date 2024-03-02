"use strict";

const numbers = document.querySelectorAll(".number");
const button = document.querySelector(".submitBtn");
const voteSpan = document.querySelector(".ratingNumber");
const firstScreen = document.querySelector(".ratingScreen");
const secondScreen = document.querySelector(".thanksScreen");

/********FUNCTIONS CREATION***********/

let alreadyClicked = [false, false, false, false, false];
let clicked = 0;
let selected = -1;

function voteSelection(selected) {
  console.log("click");
  console.log(alreadyClicked);

  if (alreadyClicked.includes(true)) {
    console.log("1", alreadyClicked);
    clicked = alreadyClicked.indexOf(true);
    numbers[selected].classList.toggle("clicked");
    numbers[clicked].classList.toggle("clicked");
    numbers[selected].classList.toggle("hover");
    numbers[clicked].classList.toggle("hover");
    alreadyClicked[clicked] = false;
    alreadyClicked[selected] = true;
    console.log(selected, clicked);
  } else {
    console.log(2);
    numbers[selected].classList.toggle("clicked");
    numbers[selected].classList.toggle("hover");
    alreadyClicked[selected] = true;
  }
}

function submit(number) {
  if (selected != -1) {
    const vote = numbers[number].textContent;
    firstScreen.classList.add("hidden");
    secondScreen.classList.remove("hidden");
    voteSpan.textContent = selected + 1;
  } else {
  }
}

/********DOM MANIPULATION***********/

for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", function () {
    selected = i;
    voteSelection(selected);
  });
}

button.addEventListener("click", function () {
  submit(selected);
});

/*"use strict";
const expander = document.querySelectorAll(".expander");
const answer = document.querySelectorAll(".answer");
const question = document.querySelectorAll(".question");

let isToggled = [false, false, false, false];

function open(number) {
  answer[number].classList.toggle("close");

  //TURNING ON AND OFF THE PLUS AND MINUS ICONS
  if (!isToggled[number]) {
    expander[number].innerHTML =
      '<svg class="expander" xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="none" viewBox="0 0 30 31"><path fill="#301534" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z"/></svg>';
    isToggled[number] = true;
  } else {
    expander[number].innerHTML =
      '<svg class="expander" xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="none" viewBox="0 0 30 31"><path fill="#AD28EB"        d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z"/></svg>';
    isToggled[number] = false;
  }
}

for (let i = 0; i < expander.length; i++) {
  expander[i].addEventListener("click", function () {
    const number = i;
    open(number);
  });
}

for (let i = 0; i < question.length; i++) {
  question[i].addEventListener("click", function () {
    const number = i;
    open(number);
  });
} */
