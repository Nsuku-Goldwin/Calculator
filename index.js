let calcString = "";
function clearAll() {
  calcString = "";
  printer(calcString);
}
function addCharacter(args) {
  calcString += args;
  printer(calcString);
}
function printer(args) {
  document.getElementById("screen").innerHTML = args;
}
function calculate() {
  calcString = eval(calcString);
  printer(calcString);
  calcString = "";
}
