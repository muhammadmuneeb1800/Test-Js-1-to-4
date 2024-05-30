let Name = document.getElementById("name");
let number = document.getElementById("number");
let variable = document.getElementById("variable");
let camel = document.getElementById("camel");
let sum = document.getElementById("sum");
let sub = document.getElementById("sub");
let multi = document.getElementById("multi");
let divide = document.getElementById("divide");
let calculate = document.getElementById("calculate");

let input = document.getElementById("input");
let Output = document.getElementById("output");

let btnInput = document.getElementById("btnInput");
let btnOutput = document.getElementById("btnOutput");

Name.onclick = function () {
  alert("Muhammad Muneeb");
  input.value = 'alert("Muhammad Muneeb")';
  Output.value = "Muhammad Muneeb";
};

number.onclick = function () {
  alert(40);
  Output.value = "40";
};

variable.onclick = function () {
  let a = "Muhammad Hassan";
  let b = "Ali";
  let c = a + " " + b;
  input.value = "let a = 'Muhammad Hassan'; let b = 'Ali';";
  Output.value = c;
};

camel.onclick = function () {
  Output.value =
    "CamelCase Is A Type of String Writting. It's Example is CamelCase";
};

sum.onclick = function () {
  alert("20");
  input.value = "let a = 10 ; let b = 10; a + b";
  Output.value = 20;
};

sub.onclick = function () {
  alert("0");
  input.value = "let a = 10 ; let b = 10; a - b";
  Output.value = 0;
};

multi.onclick = function () {
  alert("50");
  input.value = "let a = 10 ; let b = 5; a * b";
  Output.value = 50;
};

divide.onclick = function () {
  alert("10");
  input.value = "let a = 50 ; let b = 5; a / b";
  Output.value = 10;
};

calculate.onclick = function () {
  alert("26");
  input.value = "let some Calculate = 36 / 6 * 3 + 2 ** 4 - (3 + 5)";
  Output.value = 26;
};

btnInput.onclick = function () {
  input.value = "";
};

btnOutput.onclick = function () {
  Output.value = "";
};
