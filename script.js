let number = 0;

const count = document.getElementById("count");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const reset = document.gerElementById("reset");

plus.addEventListener("click", () => {
  number=number+1;
  count.texrContent = number;
});
