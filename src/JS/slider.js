import { $, $$ } from "./UTILITIES/selectors";

const sections = [...$$("form > section")];
const nextSectionBtns = [...$$("button.nextSection")];

export function slideFormEvent() {
  nextSectionBtns.forEach((btn) => btn.addEventListener("click", slideForm));
  document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      slideForm();
    }
  });
}

function slideForm() {
  let visibleSection = $("form > section.visible");
  let visibleSectionIndex = sections.indexOf(visibleSection);
  //cuando clicka aumenta el indice si es el indice del ultimo elemebnto ponlo el primero
  if (visibleSectionIndex === sections.length - 1) visibleSectionIndex = 0;
  else visibleSectionIndex++;

  //le quitamos la clase al que la tiene
  visibleSection.classList.remove("visible");

  //se lo ponemos al siguiente
  sections.at(visibleSectionIndex).classList.add("visible");
}
