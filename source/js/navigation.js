var nav = document.querySelector(".nav");
var navButton = document.querySelector(".nav__button");

nav.classList.remove("nav--nojs");

navButton.addEventListener('click', function() {
  if (nav.classList.contains("nav--closed")) {
    nav.classList.remove("nav--closed");
    nav.classList.add("nav--opened");
  } else {
    nav.classList.add("nav--closed");
    nav.classList.remove("nav--opened");
  }
});
