function generatingInputUi() {
  const inputAreas = document.querySelectorAll("#input-area div");
  const classNames =
    "text-white text-5xl sm:text-7xl flex items-center justify-center w-16 h-24 sm:w-24 sm:h-32 rounded-full blueInputThem opacity-70";
  for (let i = 0; i < 5; i++) {
    const inputContainer = document.createElement("p");
    inputContainer.id = "char";
    inputContainer.className = classNames;
    inputAreas[0].append(inputContainer);
  }
  for (let i = 0; i < 4; i++) {
    const inputContainer = document.createElement("p");
    inputContainer.id = "char";
    inputContainer.className = classNames;
    inputAreas[1].append(inputContainer);
  }
}

function generatingKeyboardUi() {
  const keyboardComponent = document.querySelector("#keyboard");
  const keyboardKeys = [
    // Row 1
    [
      "`",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "0",
      "-",
      "=",
      "Backspace",
    ],
    // Row 2
    ["Tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]", "\\"],
    // Row 3
    [
      "CapsLock",
      "A",
      "S",
      "D",
      "F",
      "G",
      "H",
      "J",
      "K",
      "L",
      ";",
      "'",
      "Enter",
    ],
    // Row 4
    ["Shift", "Z", "X", "C", "V", "B", "N", "M", ",", ".", "/", "Shift"],
    // Row 5
    ["Control", "Alt", "Space", "Alt", "ContextMenu", "Control"],
  ];

  keyboardKeys.forEach((keyrow, keyRowIndex) => {
    const keysRow = document.createElement("div");
    const keysRowClasses = "flex space-x-1 lg:space-x-2";
    keysRowClasses.split(" ").forEach((Class) => {
      keysRow.classList.add(Class);
    });
    keyrow.forEach((keyValue, keyIndex) => {
      const key = document.createElement("p");
      const keysClasses =
        "bg-white text-[#1c0846] text-base sm:text-2xl lg:text-3xl rounded-lg flex items-center justify-center px-1.5 sm:px-3 sm:py-1";

      keysClasses.split(" ").forEach((Class) => {
        key.classList.add(Class);
      });
      key.textContent = keyValue;
      keysRow.appendChild(key);
    });

    keyboardComponent.appendChild(keysRow);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  generatingKeyboardUi();
  generatingInputUi();
});
