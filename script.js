var character = document.getElementById("character");
var block = document.getElementById("block");
var counter = 0;
var timeLeft = 0;

function jump() {
  if (character.classList == "animate") {
    return;
  }
  character.classList.add("animate");
  setTimeout(function () {
    character.classList.remove("animate");
  }, 1200);
}

var checkDead = setInterval(function () {
  let characterTop = parseInt(
    window.getComputedStyle(character).getPropertyValue("top")
  );
  let blockLeft = parseInt(
    window.getComputedStyle(block).getPropertyValue("left")
  );
  if (blockLeft < 60 && blockLeft > -60 && characterTop >= 130) {
    block.style.animation = "none";
    alert("Game Over. score: " + Math.floor(counter / 100));
    counter = 0;
    block.style.animation = "block 3s infinite linear";
    timeLeft = 0;
  } else {
    counter++;
    document.getElementById("scoreSpan").innerHTML = Math.floor(counter / 100);
  }
}, 10);

function attack() {
  let characterTop = parseInt(
    window.getComputedStyle(character).getPropertyValue("top")
  );
  let blockLeft = parseInt(
    window.getComputedStyle(block).getPropertyValue("left")
  );
  if (
    blockLeft < 120 &&
    blockLeft > -120 &&
    characterTop >= 130 &&
    timeLeft <= 0
  ) {
    document.getElementById("b-red").style.backgroundColor = "red";
    setTimeout(countdown, 1000);
    timeLeft = 5;
    block.style.animation = "none";
    setTimeout(function () {
      block.style.animation = "block 3s infinite linear";
    }, 1200);
  }
}

var checkDead = setInterval(function () {
  if (timeLeft <= 0) {
    document.getElementById("b-red").style.backgroundColor = "green";
  } else {
    document.getElementById("b-red").style.backgroundColor = "red";
  }
}, 10);

function countdown() {
  timeLeft--;
  if (timeLeft > 0) {
    setTimeout(countdown, 1000);
  }
}
