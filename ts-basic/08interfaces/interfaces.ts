// interface User {
//   readonly dbId: number;
//   name: string;
//   email: string;
//   userId: number;
//   googleId?: string;
//   startTrial: () => string; // first approach <-- I like this way
//   // startTrial(): string; // second approach
//   // getCoupon(couponName: string, value: number): number;  // same
//   getCoupon: () => number;
// }
//
// // WITH "interface" WE CAN DUPLICATE THINGS BUT WITH "type" WE CANNOT
// // and in interview people like to call it as "reopening ot the interface"
// interface User {
//   githubToken: string;
// }
//
// interface Another {
//   token: string;
// }
//
// // ALSO WE CAN DO "extends" which allows us to inherit
// interface Admin extends User, Another {
//   // we can add another inheritance like "User , Another"
//   role: "admin" | "teamLeader" | "seniorDev";
// }
//
// const user: Admin = {
//   dbId: 124,
//   name: "name",
//   email: "email",
//   userId: 124,
//   role: "admin",
//   token: "token here",
//   githubToken: "github token",
//   startTrial: () => {
//     return "trial started";
//   },
//   // getCoupon: (name: "some name", off: 4.99) => {  // same
//   //   console.log("name is: ", name);
//   //   console.log("off is: ", off);
//   //   return 5;
//   // },
//
//   getCoupon: (name: string = "some name", off: number = 4.99) => {
//     console.log("name is: ", name);
//     console.log("off is: ", off);
//     return 5;
//   },
// };
//
// console.log("getCoupon is: ", user.getCoupon);
//
// user.name = "SEYTKHAN";
// user.startTrial();
