let string = document.getElementById("string");
let user = document.getElementById("user");
let operator = document.getElementById("operator");
let Else = document.getElementById("else");
let test = document.getElementById("test");
let nest = document.getElementById("nest");
let log = document.getElementById("log");

let input = document.getElementById("input");
let output = document.getElementById("output");

let inp = document.getElementById("btnInput");
let out = document.getElementById("btnOutput");

string.onclick = function () {
  let a = "Muhammad";
  let b = "Muneeb";
  let c = a + " " + b;
  input.value = a + " " + b;
  output.value = c;
};

user.onclick = function () {
  let a = prompt("Please Enter Your First Name :");
  let b = prompt("Please Enter Your Last Name :");
  input.value = a + " " + b;
  output.value = a + " " + b;
};

operator.onclick = function () {
  let a = +prompt("Please Enter Your First Number :");
  let b = +prompt("Please Enter Your Second Number :");
  if (a == b) {
    alert("Your Number Is Same !");
  } else {
    alert("Your Number Is Not Same");
  }
  output.value = "Your First Number is " + a + " Your Second Number is " + b;
};

Else.onclick = function () {
  let a = +prompt("Enter your Number");
  if (a > 40) {
    alert("You Are Eligible For This Course");
  } else {
    alert("You Are Not Eligible");
  }
};

test.onclick = function () {
  let a = +prompt("Please Enter Your Number");
  if (a >= 90 && a <= 100) {
    output.value = "Your Grade is A+";
  } else if (a >= 80 && a <= 89) {
    output.value = "Your Grade is A";
  } else if (a >= 70 && a <= 79) {
    output.value = "Your Grade is B+";
  } else if (a >= 60 && a <= 69) {
    output.value = "Your Grade is B";
  } else if (a >= 50 && a <= 59) {
    output.value = "Your Grade is C+";
  } else if (a >= 40 && a <= 49) {
    output.value = "Your Grade is C";
  } else if (a >= 33 && a <= 39) {
    output.value = "Your Grade is D";
  } else {
    output.value = "Your Grade is F And Your are Fails";
  }
};

nest.onclick = function () {
  let a = +prompt("Please Enter Your Age");
  if (a >= 40) {
    let b = +prompt("Please Enter Your Weight");
    if (b >= 60) {
      alert("Your Weight is" + " " + b);
    }
  } else {
    alert("You Are Eligible");
  }
};

log.onclick = function () {};

inp.onclick = function () {
  input.value = "";
};

out.onclick = function () {
  output.value = "";
};
