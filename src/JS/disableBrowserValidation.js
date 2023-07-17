import { $$ } from "./UTILITIES/selectors";

export const disableBrowserValidation = () => {
  [...$$("form")].forEach((form) => {
    form.setAttribute("novalidate", true);
  });
};
