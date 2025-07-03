const input = document.querySelector("input");
const answer = document.getElementById("answer");
const count = document.getElementById("count");

var min = 1,
  max = 100;

let ranNum = randomNumber();

function randomNumber() {
  return Math.round(Math.random() * (max - min + 1)) + min;
}

var average = 0;
const newBtn = document.createElement("button");
newBtn.textContent = "Play Again";
newBtn.style.backgroundColor = "aqua";
newBtn.style.fontWeight = "bold";

newBtn.addEventListener("mouseover", () => {
  newBtn.style.transition = ".5s ease";
  newBtn.style.boxShadow = "0 0 10px white";
});
newBtn.addEventListener("mouseout", function () {
  newBtn.style.transition = ".5s ease";
  newBtn.style.boxShadow = "0 0 0";
});

newBtn.addEventListener("click", () => {
  ranNum = randomNumber();
  console.log(ranNum);
  newBtn.style.display = "none";
  input.value = "";
  average = 0;
  answer.textContent = "";
  count.textContent = "";
  input.focus();
  answer.style.color = "rgb(143, 2, 2)";
});

console.log(ranNum);

function submit() {
  if (input.value == ranNum) {
    document.querySelector("main").appendChild(newBtn);
    answer.style.color = "lime";
    answer.textContent = "You're right!";
    newBtn.style.display = "block";
  } else {
    if (input.value <= ranNum) {
      answer.textContent = "the number is more than " + input.value;
    } else {
      answer.textContent = "the number is less than " + input.value;
    }
    average++;
    count.textContent = "you have try " + average + " times";
  }
}

document.addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    submit();
  }
});
