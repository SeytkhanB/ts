// const User = {
//   name: "name",
//   email: "email",
//   isActive: true,
// };

// ----------------------------
// // SOMETHING WRONG WITH THIS FUNCTION
// const createUser = ({ name: string, isPaid: boolean, email: string }) => {
//   console.log("name is: ", name);
//   console.log("isPaid is: ", isPaid);
//   console.log("email is: ", email);
// };
//
// let newUser = { name: "name", isPaid: true, email: "email" };
// createUser(newUser);
//
// const createCourse = (): { name: string; price: number } => {
//   return { name: "reactjs", price: 3.99 };
// };
// console.log("createCourse is: ", createCourse);

// ----------------------------
// type User = {
//   name: string;
//   email: string;
//   isActive: boolean;
// };
//
// const createUser = (user: User): User => {
//   const { name, email, isActive } = user;
//   return { name, email, isActive };
// };
//
// const user = {
//   name: "name",
//   email: "email",
//   isActive: true,
// };
// console.log(createUser(user));

// ----------------------------
// ALSO WE CAN DO LIKE THIS:
// type MyString = string; // <-- and use "MyString" like "string"

// ----------------------------
// "readonly" <-- values created based on this won't change
// type User = {
//   readonly _id: string[];
//   name: string;
//   email: string;
//   isActive: boolean;
//   creditcardId?: number; // <-- optional
// };
//
// const User: User = {
//   _id: ["123", "123"],
//   name: "name",
//   email: "email",
//   isActive: true,
// };
//
// // we can push elements into an array despite of being "readonly"
// User._id.push("123");
//
// // ----------------------------
// // WE ALSO CAN COMBINE TYPES
// type cardNumber = {
//   cardnumber: string;
// };
//
// type cardDate = {
//   cardDate: string;
// };
//
// type cardDetails = cardNumber &
//   cardDate & {
//     cvv: number;
//   };

export {};
