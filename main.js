let advices = ["walcz", "przemyśl to jeszcze raz"];

const addButton = document.querySelector(".add");
const cleanButton = document.querySelector(".clean");
const showAdivce = document.querySelector(".showAdvice");
const showOptions = document.querySelector(".showOptions");

const input = document.querySelector("input");

const addToArray = (e) => {
  e.preventDefault();
  if (input.value.length) {
    advices.push(input.value);
    alert(`dodano ${input.value}`);
  }
  input.value = "";
};

const cleanArray = (e) => {
  e.preventDefault();
  advices = ["walcz", "przemyśl to jeszcze raz"];
  alert("zresetowano możliwości!");
};

addButton.addEventListener("click", addToArray);
cleanButton.addEventListener("click", cleanArray);
showAdivce.addEventListener("click", showAdvice);
