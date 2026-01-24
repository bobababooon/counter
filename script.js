let number = 0;

const count = document.getElementById("count");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const reset = document.gerElementById("reset");

plus.addEventListener("click", () => {
  number=number + 1;
  count.textContent = number;
});
minus.addEventListener("click", () =>{
  number=number - 1;
  count.textContent = number;
});
reset.addEventLestener("click", () =>{
  number=0;
  count.textContent = number;
});
