//!Hamburger menu event listener and class toggle
const hamburger = document.querySelector(".hamburger-menu");

hamburger.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});

//!About me-timeline
let path = document.querySelector("path");
let pathLength = path.getTotalLength();

path.style.strokeDasharray = pathLength + " " + pathLength;

path.style.strokeDashoffset = pathLength;

window.addEventListener("scroll", () => {
  //What % down is it?
  var scrollPercentage =
    (document.documentElement.scrollTop + document.body.scrollTop) /
    (document.documentElement.scrollHeight -
      document.documentElement.clientHeight);

  // Length to offset the dashes (could add just a minus before scrollPercentage if the path is reversed in the SVG again)
  var drawLength = pathLength * scrollPercentage;

  //Draw in reverse
  path.style.strokeDashoffset = pathLength - drawLength;

  //Potential parallax effects but didn't get it to work yet
  const target = document.querySelectorAll(".scroll");

  var index = 0,
    lenght = target.length;
  for (index; index < length; index++) {
    var pos = window.pageYOffset * target[index].dataset.rate;

    if (target[index].dataset.direction === "vertical") {
      target[index].style.transform = "translate3d(0px," + pos + "px, 0px)";
    } else {
      var posX = window.pageYOffset * target[index].dataset.ratex;
      var posY = window.pageYOffset * target[index].dataset.ratey;

      target[index].style.transform =
        "translate3d(" + posX + "px, " + posY + "px, 0px)";
    }
  }
});