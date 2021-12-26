let button = document.getElementsByTagName("button");
let display = document.getElementsByClassName("displayA")[0];
let calculatet = document.getElementById("calculatet");
let cleared = document.getElementById("cleared");

for (let i = 0; i < 16; i++) {
  if (i != 12 && i != 14) {
    button[i].addEventListener("click", print);
  }
}

function print() {

  display.value = display.value + this.value;
}


calculatet.addEventListener("click", calculate);

function calculate() {
  display.value = eval(display.value);
}


cleared.addEventListener("click", clear);

function clear() {
  display.value = "";
}

