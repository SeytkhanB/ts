// const score: Array<number> = [];
// const names: Array<string> = [];
//
// function identityOne(val: boolean | number): boolean | number {
//   return val;
// }
//
// function identityTwo(val: any): any {
//   return val;
// }
//
// // long way to declare "generics"
// function identityThree<Type>(val: Type): Type {
//   return val;
// }
// const valFromFunc = identityThree(4);
//
// // shorter way to declare "generics"
// function identityFour<T>(val: T): T {
//   return val;
// }
//
// interface Bootle {
//   brand: string;
//   type: number;
// }
// function identityFive<Bootle>({})

// ------------------------------------------------------------
// Generics in Array and Array functions

// function getSearchProducts<T>(products: T[]): T {
//   const myIndex = 3;
//   return products[myIndex];
// }
//
// const getMoreSearchProducts = <T>(products: T[]): T => {
//   const myIndex = 4;
//   return products[myIndex];
// };
// IF YOU SEE "<T,>" <-- comma means this is not "jsx"

// ------------------------------------------------------------
// Generic classess
// interface Database {
//   connection: string;
//   username: string;
//   password: string;
// }
//
// function anotherFunction<T, U extends Database>(valOne: T, valTwo: U) {
//   return {
//     valOne,
//     valTwo,
//   };
// }
//
// anotherFunction(3, {
//   connection: "connection",
//   username: "user name",
//   password: "password",
// });
//
// interface Quiz {
//   name: string;
//   type: string;
// }
//
// interface Course {
//   name: string;
//   author: string;
//   subject: string;
// }
//
// class Sellable<T> {
//   public cart: T[] = [];
//
//   addToCart(product: T) {
//     this.cart.push(product);
//   }
// }
