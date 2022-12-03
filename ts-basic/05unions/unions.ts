// "union" <-- when you chain pipe sign "|" after another
// let score: number | string | boolean = 42;
//
// type User = {
//   name: string;
//   id: number;
// };
//
// type Admin = {
//   username: string;
//   id: number;
// };
//
// let user: User | Admin = { name: "name", id: 132 };
// user = { username: "name", id: 69 };

// function getDbId(id: number | string) {
//   // making some API calls
//   console.log(`DB id is: ${id}`);
// };

// getDbId(3);
// getDbId("3");
//
// function getDbId(id: number | string) {
//   if (typeof id === "string") {
//     id.toLowerCase();
//   }
// }

// const data: number[] = [1, 2, 3];
// const data2: string[] = ["1", "2", "3"];
// const data3: (string | number | boolean)[] = ["1", 2, true];

// const pi: 3.14 = 3.14; // only "3.14" is value
//
// let seatAllotment: "aisle" | "middle" | "window";
// seatAllotment = "aisle";
// // seatAllotment = 'crew'  // <-- won't work
//
// export {};
