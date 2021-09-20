var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/rockstar.jpg') {
      myImage.setAttribute ('src','images/flip.jpg');
    } else {
      myImage.setAttribute ('src','images/rockstar.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'You are the Rock Star,  ' + myName;
  }

  myButton.onclick = function() {
    setUserName();
  }