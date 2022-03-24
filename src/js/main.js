// window.onresize = function () { location.reload(); }
// window.onload = function () {
//   console.clear();
// };

// var menuBtn = document.querySelector(".navbar-toggler");
// var menuIcon = document.querySelector(".navbar-toggler-icon");

// menuBtn.addEventListener("click", function () {
//   // gsap.to(menuBtn, {});
//   console.log(menuBtn.getAttribute("aria-expanded"));
//   if (menuBtn.getAttribute("aria-expanded") == "true") {
//     menuIcon.style.backgroundImage = "url(/assets/vectors/menu.svg)";
//   } else {
//     menuIcon.style.backgroundImage = "url(/assets/vectors/close.svg)";
//   }
// });

var fname = "hello";
var lname = "world";
console.log(`welcome ${fname} ${lname} to babel js`);

class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age(x) {
    return x - this.year;
  }
}

let date = new Date();
let year = date.getFullYear();

let myCar = new Car("Ford", 2000);
document.getElementById("demo").innerHTML = `My car is ${myCar.age(year)} years old.`;

function changeClass(Target, Target2, Target3) {
  Target ? Target.classList.toggle("txtTransform") : console.log("target 1 down");
  Target2 ? Target2.classList.toggle("txtTransform") : console.log("target 2 down");
  Target3 ? Target3.classList.toggle("lightBg") : console.log("target 3 down");
}
