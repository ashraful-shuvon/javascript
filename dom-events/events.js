function makeRed() {
  document.body.style.backgroundColor = "red";
}

const makeBlue = document.getElementById("blue");
makeBlue.onclick = function makeBlue() {
  document.body.style.backgroundColor = "blue";
};

const purple = document.getElementById("purple");
purple.onclick = makePurple;

function makePurple() {
  document.body.style.backgroundColor = "purple";
}
