const inputsNumber = document.querySelectorAll(".inputGroup > input");
const indicators = document.querySelector(".indicators");

inputsNumber.forEach(input => {
   input.addEventListener("focus", hideIndicators, false);
   input.addEventListener("blur", showIndicators, false);
})

function showIndicators(){
  indicators.style.display = "flex";
}

function hideIndicators(){
  indicators.style.display = "none";
}

