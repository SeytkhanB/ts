// Enums are one of the few features TypeScript has which
// is not a type-level extension of JavaScript.
// Enums allow a developer to define a set of named
// constants. Using enums can make it easier to document intent,
// or create a set of distinct cases. TypeScript provides both
// numeric and string-based enums
var SeatChoice;
(function (SeatChoice) {
    SeatChoice["Aisle"] = "AISLE";
    SeatChoice["Middle"] = "MIDDLE";
    SeatChoice["Window"] = "WINDOW";
    // etc...
})(SeatChoice || (SeatChoice = {}));
var hcSeat = SeatChoice.Aisle;
console.log("hsSeat is: ", hcSeat);
