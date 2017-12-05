var forms = document.forms;

forms.login.email.addEventListener('keydown', function(e) {
  console.log(e.target.value);
});
console.log(forms.login.email.value);

const loginForm = forms.login;
var button = document.querySelector('button');

function enableSubmit() {
  if (loginForm.password.value.length > 0 && loginForm.username.value.length > 0 && loginForm.email.value.length > 0)
  {
    loginForm.submit.removeAttribute('disabled');
  } else {

}};

for (var i = 0; i < loginForm.length; i++) {
  loginForm[i].addEventListener('keyup', function(e) {
    enableSubmit();
  });
}

var practice = function() {
  var name = 'catherine';
  console.log(this);
};
practice();

var me = '65454';
// console.log(this.me);


var clickDiv = document.querySelector('#click');
clickDiv.addEventListener('click', function(e) {
  console.log(this);
});


var obj = {
  test: checkScope,
}

var checkScope = function(){
  // debugger;
  console.log(this);
};

// checkScope();
// obj.test();
checkScope.call(obj);



//
