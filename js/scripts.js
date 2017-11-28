const body = document.querySelector('body');

for (var i = 1; i <= 100; i++) {
  let text;
  if (i % 3 === 0) {
    text = 'fizz';

  } else if (i % 5 === 0){
  text = 'buzz';
  }
  else {
    text = i;
  }
  let elem = document.createElement('p');
  elem.textContent = text;
  body.appendChild(elem);
}
