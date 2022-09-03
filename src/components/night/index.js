var viewportHeight = window.innerHeight;
var scrollY = window.scrollY;
var sectionNo = 1;
var currentSection = document.querySelector(`.night-template div:nth-child(${sectionNo})`);
var relativePosition = currentSection.getBoundingClientRect().top;


scrollEffect = () => {
  if (scrollY > relativePosition) {
    sectionNo += 1;
    var absolutePosition = (sectionNo - 1) * viewportHeight;
    window.scrollTo({ top: absolutePosition, behavior: "smooth" });
  }
}

window.addEventListener("scroll", scrollEffect())