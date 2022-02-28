//!Rounded text around logo
let circ = new CircleType(document.getElementById("circle-text"));

//!Hamburger menu event listener and class toggle
const hamburger = document.querySelector(".hamburger-menu");

hamburger.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});