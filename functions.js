// JavaScript File to Control Navigation Bar
// Consant Declaration for HTML Elements
const autoHide = document.querySelector(".autohide");
const myNavbar = document.querySelector(".navbar-mysetup");
// Declaring Variables
var navbarPadding = document.querySelector(".autohide")
var prevScrollpos = window.pageYOffset;
var paddingValue = 0;

// Scrolling Event Listener
window.addEventListener('scroll', function() {

  // Reads Scroll Value
  var currentScrollPos = window.pageYOffset;

  // Check scroll Action
  if (prevScrollpos > currentScrollPos) {
    autoHide.style.top = "0";
    // myNavbar.style.backgroundColor = "#131416";
    myNavbar.style.backgroundImage = "url(images/background-img.jpg)";
  } else {
    // Setting padding value of navbar for hiding
    paddingValue = "-" + window.getComputedStyle(navbarPadding, null).getPropertyValue('height');
    autoHide.style.top = paddingValue;
  }

  // changes Color for the Top section
  if(currentScrollPos < 200) {
    myNavbar.style.backgroundImage = "none";
  }

  // Updating Scroll Position
  prevScrollpos = currentScrollPos;
});