// let one = document.querySelectorAll('.one')

// console.log(one);

// var myId = document.querySelector('.one');
//
// myId.addEventListener('click', function(e) {
//   console.log(e);
// });

// var colors = ["blue", "red", "yellow", "black", "purple", "pink", "green", "orange"];
// var input = document.querySelector('#no');
// var body = document.querySelector('body');
// input.addEventListener('keydown', function(e) {
//   let r =  Math.floor(Math.random() * ((colors.length - 1) - 1 +1)) + 1;
//   let randColor = colors[r];
//   body.style.backgroundColor = randColor;
// });

///the (e) lets you pull info about the event




let myPTag = document.querySelector('#myPTag');

myPTag.innerHTML = userInput;
var textWeights = [100, 200, 300, 400, 500, 600, 700, 800, 900];
let input = document.querySelector('p');
input.addEventListener(function inputKeyUp(e) {
    e.which = e.which || e.keyCode;
    if(e.which == 13) {
    }
    let r =  Math.floor(Math.random() * ((textWeights.length - 1) - 1 +1)) + 1;
      let randText = text[r];
      body.style.text = randText;
  let userInput = e.target.value;
});





















//
