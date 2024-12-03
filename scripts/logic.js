function logic() {
  const charElmList = document.querySelectorAll("#input-area span");
  let charPointer = 0;
  const startButton = document.querySelector("#start-button");

  document.addEventListener("keydown", ({ key }) => {
    if (startButton.textContent == "start") return; // chack start button
    if (key.length > 1) return; // prevent special keys
    if (charPointer > charElmList.length - 2) {
      // restarting app
      document.querySelector("#input-area p").classList.remove("hidden");
      return;
    }
    const expactedKey = charElmList[charPointer];

    if (key == expactedKey.textContent) {
      expactedKey.classList.replace("text-white/65", "text-white");
    } else {
      expactedKey.classList.replace("text-white/65", "text-red-700");
    }

    charPointer += 1;
  });
}
