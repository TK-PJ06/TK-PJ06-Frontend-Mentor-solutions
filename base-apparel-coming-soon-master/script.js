"use strict";

const btn = document.querySelector(".submtit-btn");
const inputBox = document.querySelector(".input-area");
const message = document.querySelector(".error-message");
const errorIcon = document.querySelector(".error-icon");

btn.addEventListener("click", function () {
  const email = document.querySelector(".email-input").value;
  email.trim();

  inputBox.style.borderColor = "var(--border-color)";
  message.classList.add("hidden");
  errorIcon.classList.add("hidden");

  if (
    email.length >= 3 &&
    email.includes("@") &&
    !email.startsWith("@") &&
    !email.endsWith("@")
  ) {
    console.log("Successo");
  } else {
    inputBox.style.borderColor = "var(--soft-red)";
    message.classList.remove("hidden");
    errorIcon.classList.remove("hidden");
  }
});
