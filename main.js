let advices = ["walcz", "przemyśl to jeszcze raz"];

const addButton = document.querySelector(".add");
const cleanButton = document.querySelector(".clean");
const showAdviceButton = document.querySelector(".showAdvice");
const showOptionsButton = document.querySelector(".showOptions");

const input = document.querySelector("input");

const addToArray = (e) => {
  e.preventDefault();
  if (input.value.length) {
    for (advice of advices) {
      if (advice === input.value) {
        return;
      }
    }
    advices.push(input.value);
    alert(`dodano ${input.value}`);
  }
  input.value = "";
};

const cleanArray = (e) => {
  e.preventDefault();
  advices = ["walcz", "przemyśl to jeszcze raz"];
  alert("zresetowano możliwości!");
  document.querySelector("h1").textContent = "";
};

const showAdvice = () => {
  const index = Math.floor(Math.random() * advices.length);
  if (advices.length) {
    document.querySelector("h1").textContent = advices[index];
  }
};

const showOptions = () => {
  document.querySelector("h1").textContent = alert(advices.join(", "));
};

addButton.addEventListener("click", addToArray);
cleanButton.addEventListener("click", cleanArray);
showAdviceButton.addEventListener("click", showAdvice);
showOptionsButton.addEventListener("click", showOptions);

//bonus - losowanie liczby w przedziale

Math.random() * (6 - 4) + 4;

const numberRandom = (min, max) => {
  const number = Math.random() * (max - min) + min;
  return number;
};

//od do (liczba całkowita wlcizając najwyższą)

const randomInt = (min, max) => {
  const number = Math.random() * (max - min + 1) + min;
};
