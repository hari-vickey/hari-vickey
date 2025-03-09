// JavaScript File to Control Navigation Bar
// Constant Declaration for HTML Elements

// Select elements
const autoHide = document.querySelector(".autohide");
const myNavbar = document.querySelector(".navbar-mysetup");

let prevScrollPos = window.scrollY;

// Scroll event listener
window.addEventListener("scroll", () => {
  const currentScrollPos = window.scrollY;

  if (prevScrollPos > currentScrollPos) {
    autoHide.style.top = "0px";
    myNavbar.style.backgroundColor = "#7886C7";
  } else {
    autoHide.style.top = `-${autoHide.offsetHeight}px`;
  }

  prevScrollPos = currentScrollPos;
});
