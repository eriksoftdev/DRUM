let pad1 = document.getElementById("pad1");
let pad2 = document.getElementById("pad2");
let pad3 = document.getElementById("pad3");
let pad4 = document.getElementById("pad4");
let pad5 = document.getElementById("pad5");

let kick = new Audio("audio/kick.mp3");
let snare = new Audio("audio/snare.mp3");
let hithat = new Audio("audio/hithat.mp3");
let loop = new Audio("audio/loop.wav");
let dog = new Audio("audio/dog.wav");
let gunReload = new Audio("audio/gunReload.wav");
let policeSiren = new Audio("audio/police.wav");
let hats = new Audio("audio/hats.wav");

pad1.addEventListener("click", () => {
  kick.currentTime = 0;
  kick.play();
  policeSiren.play();
});

document.addEventListener("keydown", function (event) {
  if (event.key === "a" || event.key === "A") {
    kick.currentTime = 0;
    kick.play();
    policeSiren.play();

    pad1.style.scale = 1.1;
  }
});

document.addEventListener("keyup", function (event) {
  if (event.key === "a" || event.key === "A") {
    pad1.style.scale = 1;
  }
});

pad2.addEventListener("click", () => {
  hithat.currentTime = 0;
  hithat.play();
});

document.addEventListener("keydown", function (event) {
  if (event.key === "s" || event.key === "S") {
    hithat.currentTime = 0;
    hithat.play();
    pad2.style.scale = 1.1;
  }
});

document.addEventListener("keyup", function (event) {
  if (event.key === "s" || event.key === "S") {
    pad2.style.scale = 1;
  }
});

pad3.addEventListener("click", () => {
  snare.currentTime = 0;
  snare.play();
});

document.addEventListener("keydown", function (event) {
  if (event.key === "d" || event.key === "D") {
    snare.currentTime = 0;
    snare.play();
    dog.currentTime = 0;
    dog.play();
    pad3.style.scale = 1.1;
  }
});

document.addEventListener("keyup", function (event) {
  if (event.key === "d" || event.key === "D") {
    pad3.style.scale = 1;
  }
});

pad4.addEventListener("click", () => {
  loop.currentTime = 0;
  loop.play();
  /*   loop.loop = true; */
  hats.play();
  hats.loop = true;
});

pad5.addEventListener("click", () => {});
