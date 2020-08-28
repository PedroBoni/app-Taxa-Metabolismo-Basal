const container =  document.querySelector(".container");
const indicatorsDots = document.querySelectorAll(".indicators span");

let eventController = false;
let scrollPosition = 0;
let screenWidth = screen.width;


container.addEventListener("scroll", (e) => {
  if(!eventController){
     window.requestAnimationFrame(() => {    
      scrollPosition = container.scrollLeft;

      let screenActive =  Math.round(scrollPosition / screenWidth);

      indicatorsDots.forEach((dot) => {
          dot.style.backgroundColor =  "#DDDDDD";
      })

      indicatorsDots[screenActive].style.backgroundColor = "#C5CED6";

      eventController = false;
    });

    eventController = true;
  }    
});