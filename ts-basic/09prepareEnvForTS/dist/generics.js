"use strict";
const score = [];
const names = [];
function identityOne(val) {
  return val;
}
function identityTwo(val) {
  return val;
}
function identityThree(val) {
  return val;
}
const valFromFunc = identityThree(4);
console.log(typeof valFromFunc);
