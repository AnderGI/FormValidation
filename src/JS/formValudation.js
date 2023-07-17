import { $ } from "./UTILITIES/selectors";
import { slideForm } from "./slider";

//Using the constraint validation api
export function formValidation(target) {
  const error = handleError(target);
  const divError = $("section.visible div.error");

  if (error === "OK") {
    //before sliding into the next section remove the aria attribute from the input remove it from the dv.error
    //and add hidden class to div.error (display none)
    removeError(target, divError);
    slideForm();
  } else {
    showError(error, target, divError);
  }
}

function handleError(target) {
  //get the validity object
  const validity = target.validity;

  //if its valid slide to the next section of the form
  if (validity.valid) return "OK";

  //Validate pattern
  if (validity.patternMismatch) {
    if (target.hasAttribute("title")) return target.getAttribute("title");

    return "Please match the request format";
  }

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

  return "The value you entered for the field is not valid";
}

function showError(error, field, errorField) {
  //show if the div is hidden
  if (errorField.classList.contains("hidden"))
    errorField.classList.remove("hidden");

  errorField.textContent = error;

  const id = field.getAttribute("id") ?? field.getAttribute("type");

  errorField.setAttribute("id", "error-for-" + id);

  //add aria-describedby to field to associate that field with the erro
  field.setAttribute("aria-describedby", "error-for-" + id);
}

function removeError(field, errorField) {
  field.removeAttribute("aria-describedby");
  errorField.removeAttribute("id");
  errorField.classList.add("hidden");
}
