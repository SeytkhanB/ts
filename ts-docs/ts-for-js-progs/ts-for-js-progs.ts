// // ********************************************
// // Since JavaScript supports classes and object-oriented programming, so
// // does TypeScript. You can use an interface declaration with classes:
//
// interface User {
//   name: string;
//   id: number;
// }
//
// class UserAccount {
//   name: string;
//   id: number;
//
//   constructor(name: string, id: number) {
//     this.name = name;
//     this.id = id;
//   }
// }
//
// const user: User = new UserAccount("Seyt", 1);
// console.log("user is: ", user);
//
// // ********************************************
// // UNIONS
// function wrapInArray(obj: string | string[]) {
//   if (typeof obj === "string") {
//     return [obj];
//   }
//   return obj;
// }
//
// // ********************************************
// // GENERICS
// interface Backpack<Type> {
//   add: (obj: Type) => void;
//   get: () => Type;
// }
//
// // This line is a shortcut to tell TypeScript there is a
// // constant called `backpack`, and to not worry about where it came from.
// declare const backpack: Backpack<string>;
// const object = backpack.get();
// backpack.add(21); // returns error
//
// // ********************************************
// interface Point {
//   x: number;
//   y: number;
// }
//
// function logPoint(p: Point) {
//   console.log(`${p.x}, ${p.y}`); // "12, 26"
// }
// const point = { x: 12, y: 26 };
// logPoint(point);
