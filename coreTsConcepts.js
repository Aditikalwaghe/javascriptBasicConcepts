//Union 
var value;
value = "Hello";
console.log(value);
value = 42;
console.log(value);
var lead = {
    name: "Aditi",
    role: "Team Lead",
    department: "IT"
};
console.log(lead);
//Tuples
var person;
person = ["John", 25];
console.log(person[0]);
console.log(person[1]);
//Enums
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["User"] = 1] = "User";
    Role[Role["Guest"] = 2] = "Guest";
})(Role || (Role = {}));
var userRole = Role.User;
console.log(userRole);
//Array & Object Types
var numbers = [1, 2, 3];
console.log(numbers);
//Object Types
var user1 = {
    name: "Aditi",
    age: 22
};
console.log(user1.name);
var u1 = { name: "Aditi" };
var u2 = { name: "Vsudha", age: 25 };
console.log(u1);
console.log(u2);
var user = { id: 1, name: "Alice" };
user.name = "Aditi";
