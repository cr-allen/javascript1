//scope
//var name = "catherine"
// function callName() {
//   var name = "thor";
//   console.log(name); //same as 3
// };
// callName();
// console.log(name); // same as 1
// //

// let name = "elise"
// function callName() {
//   let name = "amelia";
//   console.log(name); //amelia
// };
//  callName();
// console.log(name); //elise
//
// const name = "clint"
// function callName() {
//   const name = "theo"
//   console.log(name);
// }
// callName(); //theo
// console.log(name); //clint

//objects
// var myObj = new String('your mom');
//
// console.log(Object.getPrototypeOf(myObj));

//custom objects
var myObj = {
  firstName: "",
  lastName: ""
};


// user defined - relevant to final project minus prompt
// myObj.firstName = prompt("what's your first name?");

// bracket notation
// myObj['firstName'] = prompt("what's your first name?");
// same deal, just not usual.
//
// var array = [54, 6541, 'dance'];
// var number = 575;
// var bool = false;

function Movie(title, releaseYear, IMDBrating, director) {
  this.title = title;
  this.releaseYear = releaseYear;
  this.IMDBrating = IMDBrating;
  this.director = director;
};

var brick = new Movie("brick", 2004, 10, "your mom");
//
//
// brick.snootyLevel=100;
// brick.redditRating="10/10";
// console.log(brick);
//// ^^^ above is how to modify a singleton of a desired constructor w/o making a whole new prototype.

//adding a new method to a prototype, attaches methods to function.
//Movie.prototype.sayThings = function () {
//   return `the movie ${this.title} was released on ${this.releaseYear} and was directed by ${this.director}`
// };
// brick.sayThings();


// var username = prompt('whats your username?');
// var password = prompt('whats your password');
//
// function User(username, password) {
//   this.username=username;
//   this.password=password; //doesn't have to be identical, as long as the second one matches argument//
// }
//
// var NewUser = new User(username, password)
//
// console.log(NewUser); //works yay!



// //having a new constructor inherit from a parent. uses explict binding. call is what does it.
function Arthouse(title, releaseYear, IMDBrating, director, snootyLevel, redditRating,) {
  Movie.call(this, title, releaseYear, IMDBrating, director)
  this.snootyLevel = snootyLevel;
  this.redditRating = redditRating;

};
var snootyMovie = new Arthouse ("the room", 2002, 0, "Tommy Wiseau", "10/10", 0);

console.log(snootyMovie);




































//
