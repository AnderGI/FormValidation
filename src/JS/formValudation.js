import { $ } from "./UTILITIES/selectors";
import { slideForm } from "./slider";

//Using the constraint validation api
export function formValidation(target) {
  const error = handleError(target);
  console.log(error);

  if (error === "valid") {
    slideForm();
  }
}

function handleError(target) {
  //get the validity object
  const validity = target.validity;

  //if its valid slide to the next section of the form
  if (validity.valid) return "valid";

  //Validate minimum length
  if (validity.tooShort) return "Too short";

  //Validate maximum length
  if (validity.tooLong) return "Too long";

  //Type validity for email
  if (validity.typeMismatch) {
    if (target.type === "email") return "Email type mismatch";
  }

  //Validate pattern
  if (validity.patternMismatch) return "Pattern Mismatch";

  return "Not Valid";
}
