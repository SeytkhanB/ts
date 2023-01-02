// ********************************************
function greeter1(person) {
    return "Hello, " + person;
}
var user1 = "Jane User";
document.body.textContent = greeter1(user1);
function greeter2(person) {
    return "Hello ".concat(person.firstName, " ").concat(person.lastName);
}
var user2 = { firstName: "Jane", lastName: "User" };
document.body.textContent = greeter2(user2);
// ********************************************
// CLASSES
var Student = /** @class */ (function () {
    function Student(firstName, lastName, middleInitail) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.middleInitail = middleInitail;
        this.fullName = "".concat(firstName, " ").concat(middleInitail, " ").concat(lastName);
    }
    return Student;
}());
function greeter3(person) {
    return "Hello,  ".concat(person.firstName, " ").concat(person.lastName);
}
var user3 = new Student("Jane", "M.", "User");
document.body.textContent = greeter3(user3);
