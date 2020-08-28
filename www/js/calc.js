const inputsExercise = document.querySelectorAll(".checkBoxGroup input");
const weight = document.querySelector("#weight");
const height = document.querySelector("#height");
const age = document.querySelector("#age");
const selectorsGender = document.querySelectorAll(".selectGenderBox input");
const calories = document.querySelectorAll(".calories")

setInterval(() => { 
  if(getActivityRate() && getGender() && weight && height && age)
    calculateBasalMetabolism();
}, 1000);


function calculateBasalMetabolism(){
  let result = 0;
  let activityRate = getActivityRate();
  let gender = getGender();

  if(gender == "man")
     result = activityRate * (66 + ((13.7 * weight.value) + (5 * height.value) - (6.8 * age.value)));
  else
     result = activityRate * (655 + ((9.6 * weight.value) + (1.8 * height.value) - (4.7 * age.value)));
     
  showResult(Math.round(result));
}

function showResult(result){
  calories.forEach(calorie => calorie.innerText = result);
}

function getActivityRate(){
  let found = false;
  for(let i = 0; i < inputsExercise.length; i++){
    if(inputsExercise[i].checked){
      found = true;
      return inputsExercise[i].value;
    }    
  }
  if(!found)
      return false;
}

function getGender(){
  let found = false;
  for(let i = 0; i < selectorsGender.length; i++){
    if(selectorsGender[i].checked){
      found = true;
      return selectorsGender[i].value;
    }
  }
   if(!found)
      return false;
}