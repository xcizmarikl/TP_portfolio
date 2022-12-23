"use strict";
const navbar = document.querySelector("nav");
const sideLinks = document.querySelector("#side-links");

window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));

  if(isInViewport(navbar)){
    console.log("in view port")
    sideLinks.classList.add("d-none")
  } else{
    console.log("not in view port")
    sideLinks.classList.remove("d-none")
  }
}, false);



AOS.init();


function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}