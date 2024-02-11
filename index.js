//Var
const decrease = document.getElementById("decreaseBtn");
const reset = document.getElementById("resetBtn");
const increase = document.getElementById("increaseBtn");
const countLabel = document.getElementById("CountLabel");
let count = 0;

//Functions
increase.onclick = function(){
  count++;
  countLabel.textContent = count;
}

decrease.onclick = function(){
  count--;
  countLabel.textContent = count;
}

reset.onclick = function(){
  count = 0;
  countLabel.textContent = count;
}