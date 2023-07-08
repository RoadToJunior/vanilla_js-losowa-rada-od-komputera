let advices = ["walcz", "przemyśl to jeszcze raz"];

const addButton = document.querySelector(".add");
const cleanButton = document.querySelector(".clean");
const showAdviceButton = document.querySelector(".showAdvice");
const showOptionsButton = document.querySelector(".showOptions");

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

const showAdvice = () => {
  let index = Math.floor(Math.random() * advices.length);
  if (advices.length) {
    document.querySelector("h1").textContent = advices[index];
  }
};

const showOptions = () => {
  document.querySelector("h1").textContent = advices;
};

addButton.addEventListener("click", addToArray);
cleanButton.addEventListener("click", cleanArray);
showAdviceButton.addEventListener("click", showAdvice);
showOptionsButton.addEventListener("click", showOptions);
