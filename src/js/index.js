import Api from "./api.js";

let button = document.querySelector("#send");
button.addEventListener("click", async (event) => {
  event.preventDefault();
  const number = document.querySelector("input").value;
  const type = document.querySelector("select").value;

  const formData = { number: number, type: type };
  const response = await Api.getNumber(formData);

  const divResponse = document.querySelector(".response");
  divResponse.innerHTML = response;
});
