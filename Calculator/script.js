const h1 = document.getElementById("result");
const btn = document.querySelectorAll("button");

let memo = "";

btn.forEach((button) => {
  if (button.value !== "=") {
    button.addEventListener("click", () => {
      if (button.value === "C") {
        memo = "";
        h1.textContent = 0;
      } else {
        memo += button.value;
        h1.textContent = memo;
      }
    });
  }
});

function answer() {
  try {
    memo = eval(memo);
    //eval() untuk hitung mtk dari string eval("2+3") = 5
  } catch {
    memo = "Error";
  }
  h1.textContent = memo;
}
