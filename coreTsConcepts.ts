//Union 
let value: string | number;
value = "Hello";
console.log(value);
value = 42;
console.log(value);

//Intersection
type Employee = {
    name: string;
    role: string;
};
type Manager = {
    name: string;
    department: string;
};
type TeamLead = Employee & Manager;
let lead: TeamLead = {
    name: "Aditi",
    role: "Team Lead",
    department: "IT"
};
console.log(lead);

//Tuples
let person: [string, number];
person = ["John", 25];
console.log(person[0]);
console.log(person[1]);

//Enums
enum Role {
    Admin, User, Guest
}
let userRole: Role = Role.User;
console.log(userRole);

//Array & Object Types
let numbers: number[] = [1, 2, 3];
console.log(numbers);

//Object Types
let user1: { name: string; age: number } = {
    name: "Aditi",
    age: 22
};
console.log(user1.name);

//Optional & Readonly Properties
type User2 = {
    name: string;
    age?: number; 
};
let u1: User2 = { name: "Aditi" };
let u2: User2 = { name: "Vsudha", age: 25 };
console.log(u1);
console.log(u2);

//Readonly Properties
type User = {
    readonly id: number;
    name: string;
};
let user: User = { id: 1, name: "Alice" };
user.name = "Aditi"; 
