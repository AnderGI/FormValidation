//This module will be the one to handle all the events

import { $ } from "./UTILITIES/selectors";
import { formValidation } from "./formValudation";
import { slideForm } from "./slider";

//it will be the one in which all events will be delegated
export function delegateEvents() {
  //click and keydown events for form buttons to slide into the next form section
  //blur event to evaluate the form input validity

  //CLICK EVENT
  //Order first click, then evaluate validity; if valid slide into the next section
  document.addEventListener("click", function (event) {
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
    }
  });
}
