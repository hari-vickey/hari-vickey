// JavaScript File to Control Navigation Bar and TimeLine
// Constant Declaration for HTML Elements

// Navigation Bar Control
const autoHide = $(".autohide");
const myNavbar = $(".navbar-mysetup");
// Declaring Variables
var navbarPadding = $(".autohide")
var prevScrollPos = window.pageYOffset;
var paddingValue = 0;

// Scrolling Event Listener
window.addEventListener('scroll', function() {

  // Reads Scroll Value
  var currentScrollPos = window.pageYOffset;

  // Check scroll Action
  if (prevScrollPos > currentScrollPos) {
    autoHide.css({"top": "0px"});
    myNavbar.css("backgroundColor", "#131416");
  } else {
    // Setting padding value of navbar for hiding
    paddingValue = "-" + autoHide.height()+"px";
    autoHide.css({"top": paddingValue});
  }

  // changes Color for the Top section
  if(currentScrollPos < 200) {
    myNavbar.css("backgroundColor", "transparent");
  }

  // Updating Scroll Position
  prevScrollPos = currentScrollPos;
});

// Timeline Control
const yearContent = $(".year");
const yearButton = $(".year-button");
var switchYear = ".2023";

// Show the 2023 year
yearContent.hide();
$(switchYear).show();
$(switchYear+"b").css({"border-bottom": "solid red 2px"});

// On click show
yearButton.on("click", function (){
  if( switchYear !== ("."+this.innerHTML) ) {
    $(switchYear).slideToggle();
    $(switchYear+"b").css({"border-bottom": "none"});
    // Update the year
    switchYear = "."+this.innerHTML;
    $(switchYear).slideToggle();
    $(switchYear+"b").css({"border-bottom": "solid red 2px"});
  }
});