// "tuples" <-- is available only on typescript not javascript
// it is tuples like in python language
//TypeScript gives us a data type called tuple that helps to achieve such a
//purpose. It represents a heterogeneous collection of values. In other words,
//tuples enable storing multiple fields of different types. Tuples can also be
//passed as parameters to functions

// WITH SIMPLE WORDS THIS IS - `
//          just an array a kind of a specialized array that is given us by
//          typescript with some restrictions on to it
// `
// IN TUPLES ORDER MATTERS

// type n = number;
// type s = string;
//
// let user: [string, number, boolean]; // order should match
// user = ["string", 123, true]; // order should match
//
// let rgb: [n, n, n] = [255, 255, 255];
//
// type User = [n, s];
// const newUser: User = [123, "email@gmail.com"];
// newUser[1] = "newEmail@gmail.com"; // we can overwrite it

// "tuples" <-- restricted, but it allows us to use methods like:
//                                "push()", "pop()" and etc
// export {}
