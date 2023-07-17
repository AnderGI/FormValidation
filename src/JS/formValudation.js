import { $ } from "./UTILITIES/selectors";
import { slideForm } from "./slider";

//Using the constraint validation api
export function formValidation(target) {
  const error = handleError(target);

  if (error === "OK") {
    slideForm();
  } else {
    showError(error, target);
  }
}

function handleError(target) {
  //get the validity object
  const validity = target.validity;

  //if its valid slide to the next section of the form
  if (validity.valid) return "OK";

  //Validate minimum length
  if (validity.tooShort)
    return `Please enter a value that is longer than ${target.getAttribute(
      "minlength"
    )} characters long`;

  //Validate maximum length
  if (validity.tooLong)
    return `Please enter a value that is shorter than ${target.getAttribute(
      "maxlength"
    )} characters long`;

  //Type validity for email
  if (validity.typeMismatch) {
    if (target.type === "email") return "Please enter a correct email format";
  }

  //Validate pattern
  if (validity.patternMismatch) {
    if (target.getAttribute("title")) return target.getAttribute("title");

    return "Please match the request format";
  }

  return "The value you entered for the field is not valid";
}

function showError(error, field) {
  const divError = $("section.visible div.error");

  //show if the div is hidden
  if (divError.classList.contains("hidden"))
    divError.classList.remove("hidden");

  divError.textContent = error;

  const id = field.getAttribute("id") ?? field.getAttribute("type");

  divError.setAttribute("id", "error-for-" + id);

  //add aria-describedby to field to associate that field with the erro
  field.setAttribute("aria-describedby", "error-for-" + id);
}
