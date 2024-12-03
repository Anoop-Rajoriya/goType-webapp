function main(event) {
  randerKeyboard(); // rander keyboard ui
  randerWords(); // rander random words ui

  appStateController('stop'); // start app

  logic(); // app core logic
}

document.addEventListener("DOMContentLoaded", main);
