let simple = document.getElementById("simple");
let Name = document.getElementById("name");
let city = document.getElementById("city");
let add = document.getElementById("add");
let table = document.getElementById("table");

let input = document.getElementById("input");
let output = document.getElementById("output");

let inp = document.getElementById("btnInput");
let out = document.getElementById("btnOutput");

let cities = [
  "Faisalabad",
  "Karachi",
  "Lahore",
  "Quetta",
  "Multan",
  "Rawalpindi",
  "Kashmir",
];

simple.onclick = function () {
  let first = "Muhammad";
  let last = "Muneeb";
  let baner = "!";
  input.value = "let first = 'Muhammad', let last = 'Muneeb', let baner = '!'";
  output.value = first + " " + last + " " + baner;
};

Name.onclick = function () {
  let a = input.value;
  if (!a) {
    alert("Please Enter Your Name");
    return;
  }
  output.value = a;
};

city.onclick = function () {
  output.value = "";
  for (let i = 0; i < cities.length; i++) {
    output.value += i + 1 + ")" + " " + cities[i] + " ";
  }
};

add.onclick = function () {
  let a = input.value;
  if (!a) {
    alert("Please Enter a city");
    return;
  }
  a = cities.push(a);
  output.value = a;
};

table.onclick = function () {
  let num = input.value;
  if (!num) {
    alert("Please Enter a Table Number");
    return;
  }
  let range = +prompt("Please Enter Range Number");
  for (let i = 1; i <= range ; i++) {
    let a = num * i;
    output.value += ` ${num} * ${i} = ${a} , `;
  }
};

inp.onclick = function () {
  input.value = "";
};

out.onclick = function () {
  output.value = "";
};
