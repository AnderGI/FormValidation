import { $, $$ } from "./UTILITIES/selectors";

const sections = [...$$("form > section")];

export function slideForm() {
  //const form = event.target.form ?? $("form");
  //console.dir(form);
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
