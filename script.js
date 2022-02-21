let circ = new CircleType(document.getElementById("circle-text"));

const hamburger = document.querySelector(".hamburger-menu");

hamburger.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});
