"use strict";
// // why "interface" is important
// interface TakePhoto {
//   cameraMode: string;
//   filter: string;
//   burst: number;
// }
//
// interface Story {
//   createStory(): void;
// }
//
// // interface "extends" between each other, but class "implements"
// class Instagram implements TakePhoto {
//   constructor(
//     public cameraMode: string,
//     public filter: string,
//     public burst: number
//   ) {}
// }
//
// class Youtube implements TakePhoto, Story {
//   constructor(
//     public cameraMode: string,
//     public filter: string,
//     public burst: number,
//     private shorts: string
//   ) {}
//
//   createStory(): void {
//     console.log("story was created");
//   }
// }
