//if Statements
let age = 20;
if (age >= 18) {
  console.log("You are eligible to vote");
}

//if else Statements
let age1 = 16;
if (age1 >= 18) {
  console.log("You are eligible to vote.");
} else {
  console.log("You are not eligible to vote.");
}

//if else if else Statements
let score = 75;
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}

//Switch Statement
let day = "Monday";
switch (day) {
  case "Monday":
    console.log("Start of the week!");
    break;

  case "Friday":
    console.log("Weekend is near!");
    break;

  case "Sunday":
    console.log("It's a holiday!");
    break;

  default:
    console.log("It's a normal day");
}

//Nested if Statements
let num = 10;
if (num > 0) {
  if (num % 2 === 0) {
    console.log("Positive even number");
  } else {
    console.log("Positive odd number");
  }
} else {
  console.log("Negative number or zero");
}
