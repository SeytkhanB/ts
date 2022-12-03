// abstract class TakePhoto {
//   constructor(public cameraMode: string, public filter: string) {}
//
//   abstract getSepia(): void;
//
//   getReelTime(): number {
//     // some complex calculation
//     return 8;
//   }
// }
//
// // we cannot create an instance of an "abstract class"
// // const anInstance = new TakePhoto("camera mode", "filter");
//
// class Instagram extends TakePhoto {
//   constructor(
//     public cameraMode: string,
//     public filter: string,
//     public burst: number
//   ) {
//     super(cameraMode, filter);
//   }
//
//   getSepia(): void {}
// }
//
// // but we can create an instance of an "class" that is not "abstract"
// const anInstance = new Instagram("camera mode", "filter", 21);
