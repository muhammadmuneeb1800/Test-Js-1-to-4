let Original =
  "I love my country Pakistan. <br />  I like my city Faisalabad. <br /> I love my Homeland.";

let cities = [
  "Faisalabad",
  "Karachi",
  "Lahore",
  "Multan",
  "Quetta",
  "Bhawalpur",
  "Pindi",
  "Jhang",
];

document.getElementById("string-data").innerHTML = Original;

let lower = document.getElementById("lower");
let upper = document.getElementById("upper");
let cap = document.getElementById("cap");
let farmating = document.getElementById("farmating");
let Print = document.getElementById("print");
let add = document.getElementById("add");
let check = document.getElementById("check");
let find = document.getElementById("find");
let replace = document.getElementById("replace");

let input = document.getElementById("input");
let output = document.getElementById("result");

let clearInput = document.getElementById("clear-input");
let clearOutput = document.getElementById("clear-output");

// Convert To LowerCase

lower.onclick = function () {
  let a = input.value;
  if (!a) {
    alert("Please enter a Word");
    return;
  }
  a = a.toLowerCase();
  output.value = a;
};

// Convert To UpperCase

upper.onclick = function () {
  let a = input.value;
  if (!a) {
    alert("Please enter a Word");
    return;
  }
  a = a.toUpperCase();
  output.value = a;
};

// Convert To Capitalized

cap.onclick = function () {
  let a = input.value;
  if (!a) {
    alert("Please enter a Word");
    return;
  }
  output.style.textTransform = "capitalize";
  output.value = a;
};

// Better Formating

farmating.onclick = function () {
  let a = input.value;
  if (!a) {
    alert("Please enter a Word");
    return;
  }
  a = a.toLowerCase();
  output.style.textTransform = "capitalize";
  output.value = a;
};

// Print All Cities

Print.onclick = function () {
  output.value = "";
  for (let i = 0; i < cities.length; i++) {
    output.value += i + 1 + ") " + cities[i] + " ";
  }
};

// Add Yout City In The List

add.onclick = function () {
  let city = input.value;
  if (!city) {
    alert("Please Enter Your City Name");
    return;
  }
  let First = city.charAt(0).toUpperCase();
  let Last = city.slice(1).toLowerCase();
  let Full = First + Last;
  let cityFound = false;
  for (let i = 0; i < cities.length; i++) {
    if (cities[i] === Full) {
      cityFound = true;
      let html = Full + " " + " Is Already in List. ";
      output.value = html;
    }
  }
  if (cityFound === false) {
    cities.push(Full);
    let html = Full + " " + "Is Added in List.";
    output.value = html;
  }
};

// Check Your City in the List

check.onclick = function () {
  let city = input.value;
  if (city.length < 3) {
    alert("Please Enter city That's You Want To Find");
    return;
  }
  let a = city.charAt(0).toUpperCase();
  let b = city.slice(1).toLowerCase();
  let c = a + b;
  let found = false;
  for (let i = 0; i < cities.length; i++) {
    if (cities[i] === c) {
      found = true;
      let html = c + " " + "Is Founded.";
      result.value = html;
    }
  }
  if (found == false) {
    let html = "Sorry Your City Is Not Found in the List";
    result.value = html;
  }
};

// Find This Word

find.onclick = function () {
  // let a = input.value;
  // if (!a) {
  //   alert("Please enter Word");
  //   return;
  // }
  // let New = Original.toLowerCase();
  // let word = a.toLowerCase();
  // let findWord = New.indexOf(word);
  // if (findWord !== -1) {
  //   let html = "Your Word " + word + " is Found !";
  //   result.value = html;
  // } else {
  //   let html = "Your Word " + word + " is Not Found!";
  //   result.value = html;
  // }
};

// Replace the word

replace.onclick = function () {
  // let word = input.value;
  // if (!word) {
  //   alert("Please Enter a Word");
  //   return;
  // }
  // let originalText = Original.toLowerCase();
  // let newWord = word.toLowerCase();
  // let replace = prompt("Please Enter Your Word that you want to replace");
  // if (!replace) {
  //   alert("Please Enter Your Word that you want to replace with" + word + ".");
  //   return;
  // }
  // newWord = new RegExp(word, "g");
  // replace = replace.toLowerCase();
  // let Replace = originalText.replace(newWord, replace);
  // output.value = Replace;
};
