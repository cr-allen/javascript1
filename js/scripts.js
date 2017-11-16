// function() {
//   //all functions, anon or named, require this syntax/.
//   //inside the () is where you pass info
//   //this defines, it does not call the function
// };
//
//
// function(name) {
//   console.log(name);
// }('catherine') ///<-- this set of paranthesis tells JS to stick it in there for the variable when anon
//
//
// //below is a function expression
// function logName(name)
//   console.log(name); ///<-- the scope of the expression
//   let me = 'kg';
//   let you = 'lolno';
//
// var nameToLog = prompt('gimme yo name');
// logName('catherine'); //<-- calling the function
// function sfsdf('') {
//
// }

//function declaration v function expression
  //func dec does not use variable
  //expression uses a variable to refer to an anon function, which makes it non anon anymore
  // function hoisting happens after var hoisting (3rd and 4th, named and anon respectively), except function expressions don't
  //variables declared inside a function can't be seen or used outside, but inside var can access all the things inside.
  //defining functions the arguments are artbirary , calling functions is decidedly not. order always does, but write intuative code


//Recursive Functions: Function that calls itself, performs a bit like a loop.
  //we don't use loops instead because a) ugly af, & b) loops are not good for huge sets of data. also better for error reporting.


//substr - substring. looks for a string within a strin. -1 = thing ur looking 4 doesn't exist.

// console.log('hi');
var sentence = prompt('gimme a sentence plz');
function capitalize(string){
  var firstLetter = string.substr(0,1).toUpperCase();
  var rest = string.substr(1).toLowerCase();
  return `${firstLetter}${rest}`;
};

alert(capitalize(sentence));
if(string.indexOf('.') != -1) {
  var example = string.split('.')
  console.log();
  if (example.length > 2) {
    let newSentence;
    let i = 0;
    for (i; i <= example.length; i++)
    var firstLetter = string[i].substr(0,1).toUpperCase();
    var rest = string[i].substr(1).toLowerCase();
    newSentence += `${firstLetter}${rest}`;
   }
   return newSentence;
  }
}


//i don't understand the ...substr(0,1) thing










//
