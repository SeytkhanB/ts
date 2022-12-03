"use strict";
// ------------------------------------------------------------
// CLASS IN TS
// class User {
//   email: string;
//   name: string;
//   readonly city: string = "NYC"; // <-- initialize or by default
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }
// }
//
// const user = new User("email@gmail.com", "name");
// ------------------------------------------------------------
// private and public
// Longer Way
// class User {
//   public email: string;
//   name: string;
//   private readonly city: string = "NYC"; // <-- initialize or by default
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//     this.city = "NYC"; // but inside class we have access to "city"
//
//     console.log("city is: ", this.city);
//   }
// }
//
// const user = new User("email@gmail.com", "name");
// user.city // <-- we cannot access it while it is private
// ------------------------------------------------------------
// short way
// class User {
//   readonly city: string = "NYC";
//   constructor(
//     public email: string,
//     public name: string,
//     private userId: string
//   ) {}
// }
//
// const user = new User("email@gmail.com", "name", "userId");
// ------------------------------------------------------------
// getter and setter
// IN "setter" WE CANNOT DO "return" OR ": void", ": number" and etc, meaning
// it cannot return something from "setter"
// class User {
//   private _courseCount = 1;
//   readonly city: string = "NYC";
//   protected _specialUserName = "special name";
//   constructor(
//     public email: string,
//     public name: string,
//     private _userId: string
//   ) {}
//
//   private deleteToken() {
//     console.log("Token deleted");
//   }
//
//   get getUserEmail(): string {
//     return `user email is: ${this.email}`;
//   }
//
//   get courseCount(): number {
//     return this._courseCount;
//   }
//
//   set courseCount(num) {
//     if (num <= 1) {
//       throw new Error("Course count should be more that 1");
//     }
//
//     this._courseCount = num;
//   }
// }
// const user = new User("email@gmail.com", "name", "userId");
// when we give value to setter:
// user.courseCount = "value here";
// ------------------------------------------------------------
// protected <-- similar to "private"
// instead of doing "private" do "protected" then it will accessible to
// inheritence classess but not outside
// class SubUser extends User {
//   isFamily: boolean = true;
//   set setSpecialUserName(name: string) {
//     this._specialUserName = name;
//   }
// }
// ------------------------------------------------------------
