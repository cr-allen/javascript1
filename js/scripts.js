// // var message = "yo";
// // console.log(typeof message);
// //
// // let fresh = true
// // console.log(fresh)
// //
// // const name = "ryan";
// // console.log(name);
// // if(fresh) {
// //   name = "rascal"
// //
// // }
//
//
//
// //   // var best = "star trek";
// // let best = "regulus";
// // const best = "auggie";
// // console.log(best);}
//
//
//
//   // var best = "auggie";
// // let best = "star trek";
// // const best = "regulus";
// // console.log(best);}
// //
// // {
// //   // var best = "regulus";
// // let best = "auggie";
// // const best = "star trek";}
// // console.log(best);
//
// // const is hella locked down
//
// // predefined objects
//
// // newDate
// // var rightNow = new Date( );
// // console.log(rightNow);
// //
// //
// // // math object
// // var randomNumber = Math.random ();
// // console.log(randomNumber);
// // // console.log(stringObj.split('0'));
// //
// // var name = 'janie';
// //
// // // makes a string object like so:
// // var stringObj = new String ('john');
// //
// // // console.log(typeof name, typeof stringObj);
// //
// // console.log(stringObj.split('j').join('ough'));
// // console.log(name.length);
//
// let bestNumber = 42;
//
// console.log(typeof bestNumber);
//
// let reallyBestNumber = new Number(42);
// console.log(reallyBestNumber);
//
//
// let bool = new Boolean(1);
//
// console.log(bool);
//
// //  ---------- key - value. can have more than one value.
// let object = {name: 'sally'};
// // console.log(object);
//
//
// // alert('hey thar');
// // var confirm = confirm('are u sure');
// // console.log(confirm);
// var userAnswer = prompt('what is your name');
// console.log(userAnswer);
//
//
//
//







// let firstName = prompt('what\'s your first name?');
// console.log(firstName);
// let lastName = prompt('what\'s your last name?');
// alert(lastName);
// let birthday = prompt('what\'s your birthday?', '12/12/2340');
// let isBirthdayCorrect = confirm('is ${birthday} your birthday?');
// // assuming user said yes
// alert(birthday);

// logical operator syntax
// logical and
// let a = 1;
// let b = 2;

// function compare (){
//   if ( a && b) {
//     console.log('horray!');
//   }
//   else {
//     console.log('aw sad it does not work');
//   }
// }
//
// let a = 1;
// let b = 2;
//
// function compare(){
//   if ( a || b) {
//     console.log('horray!');
//   }
//   else {
//     console.log('aw sad it does not work');
//   }
// }
// let isOldEnough = true;
// let hasWork = false;
// let hasMoney = true;
//
// function compare(){
//   if (isOldEnough == true && (hasMoney == true || hasWork = false)) {
//     console.log('DO IT');
//   }
//   else{
//     console.log('NO');
//   }
// }

// let a = 1;
// let b = 2;
// function compare (){
//   console.log(a <= b);
// }
//
// compare(); <-- remember that you need this.

// var string = 'regulus'; //primitive
// var newString = new String('regulus'); //object
// var cat = string === newString;
//
// console.log(cat);
//

// arithmetic operators - order of operations applies
// console.log(15 % 5);

// incrementing and decrementing - can only do +/- 1
// var age = 28;
// // alert(age);
// age++;
// alert(age);


// var stringToNum = "vacation";
// // trying to change that into a number
// var yes = parseInt(stringToNum);
// console.log(yes);
// // would make it into a number if it were a number character
//
// var price = prompt("how many");
// price = parseInt(price);
// alert(price);
// price += .8942;
// alert(price);
//
// var ryan = "cool";
// var ryan == "cool";

//
// var numberOne = prompt('gimme a number',10);
// var numberTwo = prompt('gimme another number',10);
// numberOne = parseInt(numberOne);
// numberTwo = parseInt(numberTwo);
// numberOne += numberTwo;


// if (numberOne >= 22) {
//   alert('it is 22!');
//
// }
// else if (numberOne === 12) {
//   alert('it is !12!! o.o');
// } //no semi colon bc it'll throw an error
//
// switch (numberOne) {
//   case 10:
//     alert('it is 10!!!!');
//     break;
//   case 22:
//     alert('yo mama');
//     break;
//   default:
//     alert('you failed!');
// }
// these must be strictly defined, MUST have a break
// var userResponse = prompt('gimme a number');
// userResponse = parseInt(userResponse);
// userResponse == NaN ? alert('OHNO') : alert(userResponse);
//
// var isMember = confirm("are you a member, plz be honest")
// var price;
//
// isMember ? price == 2 : price == 6;


var birthday = prompt('how old are you?', 12/08/1975);
  var birthday = new Date(birthday);
  birthday.setFullYear( birthday.getFullYear() - 18 );
  $("#searchDateFrom").val((birthday.getFullYear()))

if (birthday >=18) {
  confirm("congrats! you're an adult. do you like Star Trek?")
} else {

}



//
