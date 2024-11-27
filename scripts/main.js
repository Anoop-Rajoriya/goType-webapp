const DOM_ELM = {};
const APP_DATA = {};

function getRandomString(length) {
  const charSet =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:',.<>?/";
  let randomString = "";

  for (let index = 0; index < length; index++) {
    const randomIndex = Math.floor(Math.random() * charSet.length);
    randomString += charSet[randomIndex];
  }

  return randomString;
}

function displayWordsToScreen() {
  if (APP_DATA.throtle) return;
  APP_DATA.throtle = true;
  if (APP_DATA.randomString.length < APP_DATA.randomStringPointer) {
    console.log("generate more");
  }
  DOM_ELM.charContainers.forEach((charContainer, charContainerIndex) => {
    charContainer.textContent =
      APP_DATA.randomString[APP_DATA.randomStringPointer];
    APP_DATA.randomStringPointer += 1;
  });

  setInterval(() => {
    APP_DATA.throtle = false;
  }, 200);
}

function trackingInput() {
  const inputArea = document.querySelector("#input-area");
  let current = 0;
  inputArea.addEventListener("keyup", (event) => {
    console.log(DOM_ELM.charContainers[current].textContent, event.key);
    DOM_ELM.charContainers[current].classList.remove("opacity-70");
    current += 1;

    if (current == DOM_ELM.charContainers.length) {
      current = 0;
      DOM_ELM.charContainers.forEach((charContainer) => {
        charContainer.className =
          "text-white text-5xl sm:text-7xl flex items-center justify-center w-16 h-24 sm:w-24 sm:h-32 rounded-full blueInputThem opacity-70";
        displayWordsToScreen();
      });
    }
  });
}

function gameEndOrRestart() {}

function main() {
  APP_DATA.randomString = getRandomString(27);
  APP_DATA.randomStringPointer = 0;
  APP_DATA.throtle = false;
  displayWordsToScreen();
  trackingInput();
}

document.addEventListener("DOMContentLoaded", () => {
  DOM_ELM.inputAreas = document.querySelectorAll("#input-area div");
  DOM_ELM.charContainers = [
    ...Array.from(DOM_ELM.inputAreas[0].querySelectorAll("p")),
    ...Array.from(DOM_ELM.inputAreas[1].querySelectorAll("p")),
  ];

  main();
});
