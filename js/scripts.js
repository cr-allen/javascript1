//don't store passwords at all!!
var loginButton = document.querySelector('button')

loginButton.addEventListener('click', function(e) {
  e.preventDefault();//mockup for submitting data and getting results. don't do irl
  var username = document.forms[0].username.value;

  localStorage.setItem("username", username); //can grab them in this scope
});


var editUser = function() {
  var username = document.querySelector("update");
  var containsClass=username.classList.contains("editMode"); //element might need to be li??
  if (containsClass) {
    username.innerText=editInput.value;
  } else {
    username.value=label.innerText;
  }
  listItem.classList.toggle("editMode");

};

var clearUser = function() {
  localStorage.clearItem("username", username);


};

var alert = function () {

}

var update = document.querySelector('#update'),
clear = document.querySelector('#clear'),
useralert = document.querySelector('#alert');

var arr = [];
arr.push(update,clear,useralert);

//can also be done with querySelectorAll
//args are what changes
var attachListeners = function(element, evt) {
  element.addEventListener(evt, function(e) {
    switch (element) {
      case update:
        var itemToStore = document.forms.login.username.value;
        localStorage.setItem('username',itemToStore);
        break;
      case clear:
        localStorage.removeItem('username');
        break;
      case useralert:
        let itemToAlert = localStorage.getItem('username');
        console.log(alert('cheese'))
        alert(itemToAlert);
        break;
    }
  });
};
///for universal, write separate indivudal functions for each possibility
//dynamic element and a dynamic event
//switch is will stay the same
for (let i = 0; i < arr.length; i++) {
  attachListeners(arr[i], "click");
};
