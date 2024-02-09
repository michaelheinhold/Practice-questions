let body = document.querySelector("#question-body")
let inputForm = document.querySelector("#searchTxt")
let div = document.createElement("div")

inputForm.addEventListener("keyup", () => {
  div.innerHTML = inputForm.value
  body.appendChild(div)
})