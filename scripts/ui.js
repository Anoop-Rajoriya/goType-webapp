function randerWords() {
  const wordsSet =
    "In the Aurora, beneath a glowing Beacon, a swift Cheetah chased a curious Dolphin that had leaped from the ocean into the magical Eclipse of a full moon. Falcons soared high, their cries echoing across the Galaxy, where the Horizon gleamed with hues of golden Igloos shaped by frozen storms. A playful Jungle Kite danced in the wind above the serene Lion’s den, nestled near the Mountain, where Nectar flowed in rivers surrounded by blooming Orchids. Amidst the misty Panda forest, the crystalline Quartz glimmered like a hidden Rainbow. Satellites blinked in the vast sky while a solitary Tiger prowled silently under the Umbrella of tall trees, guarded by a fiery Volcano that watched over the land. At the shore, a young Wizard played a Xylophone, its notes carrying tales of Yellow sands and the gentle breeze of a passing Zephyr. Nearby, carved into the rock, were mysterious symbols: 12345, 67890, ABCDE, and abcde, reminding travelers of the code of the universe.";
  let str = "";
  const randomStrLength = 1;
  const inputAreas = document.querySelector("#input-area");
  for (let i = 0; i < randomStrLength; i++) {
    const index = Math.floor(Math.random() * wordsSet.split(" ").length);
    str += `${wordsSet.split(" ")[index]} `;

    const wordArray = [...Array.from(wordsSet.split(" ")[index]), " "];

    wordArray.forEach((char, charIndex) => {
      const charElm = document.createElement("span");
      charElm.textContent = char;
      charElm.classList.add("text-white/65");

      inputAreas.appendChild(charElm);
    });
  }

  // inputAreas.textContent = str
}
function randerKeyboard() {
  const keyboardComponent = document.querySelector("#keyboard");
  const keyboardKeys = [
    ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "back"],
    ["tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    [, "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "enter"],
    ["shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/"],
    [, "ctrl", "alt", "space", "alt", "ctrl"],
  ];

  keyboardKeys.forEach((keyrow, keyRowIndex) => {
    const keysRow = document.createElement("div");
    const keysRowClasses = "grid grid-cols-12 gap-1 px-1";
    const specialKeyRegex = /^(tab|enter|shift|ctrl|alt|cLock|back)$/;
    keysRowClasses.split(" ").forEach((Class) => {
      keysRow.classList.add(Class);
    });
    keyrow.forEach((keyValue, keyIndex) => {
      const key = document.createElement("p");
      const keysClasses =
        "bg-white text-[#1c0846] text-lg sm:text-xl lg:text-2xl flex items-center justify-center px-1 p-0.5 rounded-lg";

      keysClasses.split(" ").forEach((Class) => {
        key.classList.add(Class);
      });

      if (specialKeyRegex.test(keyValue)) {
        key.classList.add("col-span-2");
      }
      if (keyValue == "space") {
        key.classList.add("col-span-4");
      }

      key.textContent = keyValue;
      keysRow.appendChild(key);
    });

    keyboardComponent.appendChild(keysRow);
  });
}
function appStateController(state){
  const startButton = document.querySelector("#start-button");

  startButton.textContent = state;
}