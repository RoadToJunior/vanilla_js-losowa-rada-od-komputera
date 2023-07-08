const advices = ["walcz", "przemyśl to jeszcze raz"];

const addButton = document.querySelector(".add");
const cleanButton = document.querySelector(".clean");
const showAdivce = document.querySelector(".showAdvice");
const showOptions = document.querySelector(".showOptions");
const input = document.querySelector("input");

const add = (e) => {
  e.preventDefault();
  if (input.value.length) {
    advices.push(input.value);
    alert(`dodano ${input.value}`);
  }
};

addButton.addEventListener("click", add);
