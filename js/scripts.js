// var faves = ["stranger things", 'wonder woman', 23, false, 2007, "stranger things"];
// console.log(faves, faves.length);


// console.log(Array.isArray(faves));

// var faveTvShow = "stranger things";
// faves.unshift(faveTvShow);
// console.log(faves.pop());
//
// console.log(faves);

// console.log(faves.slice(1,3));
// let importantIndex = faves.indexOf("stranger things", 1);
// console.log(importantIndex);


// console.log(faves);

var holder = [];
var faveM1 = ['rubber', 'robert',1];
var faveM2 = ['wonder woman', 'diana',3];
var faveM3 = ['captain america the winder soldier', 'steve, nominally',2];
var faveM4 = ['monty python the search for the holy grail', 'sir not appearing in this movie',4];

holder.splice(0, 0, faveM1, faveM2, faveM3, faveM4);
console.log(holder);
// ??? didn't work, ask later

var movieTitles = [];

movieTitles.push(holder [0][0], holder[1][0], holder[2][0], holder[3][0]);
// alert(movieTitles);

var faveLeastFave = [];
faveLeastFave.push(movieTitles[0], movieTitles[3]);
// alert(faveLeastFave);

var arr = ['js1', 'websites for beginners', 'mobile friendly', 'angular 2'];

// let n = 0;
// let o = 10;
//
// while (n < holder.length > o) {
//   if (holder[n][0].toUpperCase) {
//     if (holder[n][0] == 'rubber') {
//
//     console.log(holder[n]);
//     }
//   }
//   n++;
// }

for (let i = 0; i < holder.length; i++) {
  console.log(holder[i]);
}












//
