//for Loop
for (let i = 1; i <= 10; i++) {
  console.log("Iteration:", i);
}

//While Loop
let count = 1;
while (count <= 5) {
  console.log("Count:", count);
  count++;
}

//do while Loop
let num = 1;
do {
  console.log("Number:", num);
  num++;
} while (num <1);

//for in Loop
let person = {
  name: "Aditi",
  age: 21,
  city: "Shirdi"
};

for (let key in person) {
  console.log(key, ":", person[key]);
}

//for of Loop
let fruits = ["Aditi", "Sakshi", "Dipali"];
for (let fruit of fruits) {
  console.log(fruit);
}

//for of Loop for String
let word = "Aditi";
for (let letter of word) {
  console.log(letter);
}

//break Statement
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    break;
  }
  console.log(i);
}

//continue Statement
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}

// //infinite Loop
// while (true) {
//   console.log("This will run forever!");
// }
