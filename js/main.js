// window.onresize = function () { location.reload(); }
// window.onload = function () {
//   console.clear();
// };

var menuBtn = document.querySelector(".navbar-toggler");
var menuIcon = document.querySelector(".navbar-toggler-icon");

menuBtn.addEventListener("click", function () {
  // gsap.to(menuBtn, {});
  console.log(menuBtn.getAttribute("aria-expanded"));
  if (menuBtn.getAttribute("aria-expanded") == "true") {
    menuIcon.style.backgroundImage = "url(/assets/vectors/menu.svg)";
  } else {
    menuIcon.style.backgroundImage = "url(/assets/vectors/close.svg)";
  }
});
