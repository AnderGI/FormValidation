import { $, $$ } from "./JS/UTILITIES/selectors";
import { delegateEvents } from "./JS/controller";
import { disableBrowserValidation } from "./JS/disableBrowserValidation";
import { formValidation } from "./JS/formValudation";
import { slideFormEvent } from "./JS/slider";
import "./style.css";
window.addEventListener("DOMContentLoaded", function () {
  disableBrowserValidation();
  delegateEvents();
});
