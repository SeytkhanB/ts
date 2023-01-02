// ********************************************
function greeter1(person: string) {
  return "Hello, " + person;
}

let user1 = "Jane User";

document.body.textContent = greeter1(user1);

// ********************************************
// INTERFACE
interface Person {
  firstName: string;
  lastName: string;
}

function greeter2(person: Person) {
  return `Hello ${person.firstName} ${person.lastName}`;
}

let user2 = { firstName: "Jane", lastName: "User" };
document.body.textContent = greeter2(user2);

// ********************************************
// CLASSES
class Student {
  fullName: string;
  constructor(
    public firstName: string,
    public lastName: string,
    public middleInitail: string
  ) {
    this.fullName = `${firstName} ${middleInitail} ${lastName}`;
  }
}

interface Person {
  firstName: string;
  lastName: string;
}

function greeter3(person: Person) {
  return `Hello,  ${person.firstName} ${person.lastName}`;
}

let user3 = new Student("Jane", "M.", "User");
document.body.textContent = greeter3(user3);
