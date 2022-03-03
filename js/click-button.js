const buttonLab = document.querySelector(".info-button");
const buttonStory = document.querySelector(".info-button-story");
const buttonContact = document.querySelector(".contact-us");

buttonLab.addEventListener("click", (event) => {
  buttonLab.style.backgroundColor = "var(--color-third)";
});
buttonStory.addEventListener("click", (event) => {
  buttonStory.style.backgroundColor = "var(--color-third)";
});

buttonContact.addEventListener("click", (event) => {
  buttonContact.style.backgroundColor = "var(--color-third)";
});
