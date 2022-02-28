let num1 = 8
let num2 = 2
document.getElementById("num1").textContent = num1
document.getElementById("num2").textContent = num2
let res = 0
function add() {
  document.getElementById("sum").textContent = "sum: " + (num1 + num2)
}
function sub() {
  document.getElementById("sum").textContent = "difference: " + (num1 - num2)
}
function mul() {
  document.getElementById("sum").textContent = "product: " + (num1 * num2)
}
function div() {
  document.getElementById("sum").textContent = "qoutient: " + (num1 / num2)
}