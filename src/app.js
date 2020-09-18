import { isValid } from "./utils.js";
import "./styles.css";

const form = document.getElementById("form");
const input = form.querySelector("#question-input");
const submitBtn = form.querySelector("#submit");

form.addEventListener("submit", submitFormHandler);
form.addEventListener("input", () => {
  submitBtn.disabled = !isValid(input.value);
  !isValid(input.value)
    ? input.classList.add("is-invalid")
    : input.classList.remove("is-invalid");
});

function submitFormHandler(event) {
  event.preventDefault();

  if (isValid(input.value)) {
    const question = {
      text: input.value.trim(),
      date: new Date().toJSON()
    };
    console.log(question);

    submitBtn.disabled = true;
    input.value = "";
    submitBtn.disabled = false;
  }
}
