let button = document.querySelector("#button");
let span = document.querySelector("#click-count");

let click = 0;
button.addEventListener("click", () => {
  click++;
  span.innerHTML = click;
})