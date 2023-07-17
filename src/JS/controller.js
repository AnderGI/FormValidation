//This module will be the one to handle all the events

import { $ } from "./UTILITIES/selectors";
import { formValidation } from "./formValudation";
import { slideForm } from "./slider";
import { passwordMeter } from "./PASSWORD INPUT/passwordMeter";
//it will be the one in which all events will be delegated
export function delegateEvents() {
  //click and keydown events for form buttons to slide into the next form section
  //blur event to evaluate the form input validity

  //CLICK EVENT
  //Order first click, then evaluate validity; if valid slide into the next section
  document.addEventListener("click", function (event) {
    event.preventDefault();
    const target = event.target;
    if (target.classList.contains("firstBtn")) {
      //first btn should not valudate anything
      slideForm();
    } else if (
      target.type === "button" &&
      target.classList.contains("nextSection")
    ) {
      //else take the input from the visible section and validate it
      const visibleInput = $("section.visible input");
      formValidation(visibleInput);
      visibleInput.value = "";
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.code === "Enter") {
      const visibleInput = $("section.visible input");
      if (!visibleInput) slideForm();
      else formValidation(visibleInput);
    }
  });

  document.addEventListener("input", function (event) {
    const visibleInput = $("section.visible input");
    if (visibleInput.type === "password") {
      passwordMeter(visibleInput.value);
    }
  });
}
