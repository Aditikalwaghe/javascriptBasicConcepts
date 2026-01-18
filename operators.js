let a = 10;
let b = 3;

//Arithematic Operators
console.log("Addition:", a + b); 
console.log("Subtraction:", a - b); 
console.log("Multiplication:", a * b); 
console.log("Division:", a / b);
console.log("Modulus:", a % b); 
console.log("Exponentiation", a ** b); 

// Increment and Decrement
console.log(a++);
console.log(a);
 
console.log(++b);
console.log(b);

//Assignment operators
let c = 5;
c += 3; 
console.log( c);
c -= 2; 
console.log(c);
c *= 2; 
console.log(c);
c /= 2; 
console.log(c);
c %= 3; 
console.log(c);

// Comparison Operator
let x=10
let y = "10";
console.log("x == y:", x == y);  
console.log("x === y:", x === y); 
console.log("x != y:", x!= y); 
console.log("x !== y:", x !== y); 
console.log("x > 5:", x > 5);     
console.log("x < 20:", x < 20);   
console.log("x >= 10:", x >= 10); 
console.log("x <= 9:", x <= 9);   

// LOGICAL OPERATORS
let p = true;
let q = false;
console.log("AND:", p && q); 
console.log("OR:", p || q);   
console.log("NOT:", !p);         

// Ternary Operator
let age = 18;
let msg = (age >= 18) ? "you can vote" : "you cant vote";
console.log(msg);