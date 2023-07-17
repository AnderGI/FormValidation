import zxcvbn from "zxcvbn";
import { $ } from "../UTILITIES/selectors";

const strength = {
  0: "Really Weak",
  1: "Weak",
  2: "Meh",
  3: "Strong",
  4: "Really Strong",
};
export function passwordMeter(inputValue) {
  const { score } = zxcvbn(inputValue);
  const messageEl = $("div.passwordContainerMeter span");
  messageEl.textContent = strength[score];
}
