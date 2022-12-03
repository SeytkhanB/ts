// const addTwo = (num: number) => {
//   return num + 2;
// };
//
// const getUpper = (str: string) => {
//   return str.toUpperCase();
// };
//
// const signUpUser = (name: string, email: string, isPaid: boolean) => {
//   console.log("name is: ", name);
//   console.log("email is: ", email);
//   console.log("isPaid is: ", isPaid);
// };
//
// // making data default. we can make it by "="
// const loginUser = (name: string, email: string, isPaid: boolean = true) => {
//   console.log("name is: ", name);
//   console.log("email is: ", email);
//   console.log("isPaid is: ", isPaid);
// };
// addTwo(5);
// getUpper("4");
// signUpUser("name", "email", true);
// loginUser("name", "email");

// force to return special type ↓ for functions
// const func = (num: number): number => {
//   return num * num;
// };
// let example = func(4);
// console.log("example is: ", example);

// THIS SITUATION COULD HAPPEN
// in this case you should give ": string | boolean" -----------
// const getValue = (val: number): string | boolean => {
//   if (val > 5) return true;
//   return "200 OK";
// };
// console.log("getValue is: ", getValue);

// DECLARE FUNCTION LIKE SOMETHING RETURNS YOU SHOULD RETURN IT
// const getHello = (s: string): string => {
//   return "";
// };

// const heros = ["thor", "spiderman", "ironman"];
// const heros = [
//   { name: "thor", age: 42 },
//   { name: "spiderman", age: 24 },
//   { name: "ironman", age: 69 },
// ];
//
// const showHeros = heros.map((hero: object): string => {
//   return `hero is ${hero}`;
// });
// console.log(showHeros);

// "void" IT DOESN'T RETURN SOMETHING
// const consoleError = (errmsg: string): void => {
//   console.log(errmsg);
// };
// console.log(consoleError);

// "never" IT NEVER RETURNS SOMETHING
// const handleError = (errmsg: string): never => {
//   throw new Error(errmsg);
// };
// console.log(handleError);
//
// export {};
