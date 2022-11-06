import _ from "lodash";
import "./style.css";

const sendButton = document.querySelector("button");
const formValidationSection = document.querySelector(
  "section[data-form-validation]"
);

const emailInput = document.getElementById("email");
const emailErrors = document.getElementById("emailErrors");
const emailLabel = document.querySelector('label[for="#email"]');

const countryInput = document.getElementById("country");
const countryErrors = document.getElementById("countryErrors");
const countryLabel = document.querySelector('label[for="#country"]');

const zipCodeInput = document.getElementById("zipCode");
const zipCodeErrors = document.getElementById("zipCodeErrors");
const zipCodeLabel = document.querySelector('label[for="#zipCode"]');

const passwordInput = document.getElementById("password");
const passwordErrors = document.getElementById("passwordErrors");
const passwordLabel = document.querySelector('label[for="#password"]');

const confirmPasswordInput = document.getElementById("confirmPassword");
const confirmPasswordErrors = document.getElementById("confirmPasswordErrors");
const confirmPasswordLabel = document.querySelector(
  'label[for="#confirmPassword"]'
);

//EMAIL
function checkEmail(email) {
  //try with regexes and then try to implement it by sending automatical emails ( that could also be as useful way of validating)
  //From emailregex.com
  const emailValidator =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (emailValidator.test(email.value)) {
    return true;
  } else {
    return false;
  }
}

emailInput.addEventListener("input", () => {
  if (!checkEmail(emailInput)) {
    emailErrors.textContent =
      "Email does not have the right format: example@domain.com";
    if (emailLabel.classList.contains("valid"))
      emailLabel.classList.remove("valid");
    emailLabel.classList.add("invalid");
  } else {
    emailErrors.textContent = "Good email format!";
    if (emailLabel.classList.contains("invalid"))
      emailLabel.classList.remove("invalid");
    emailLabel.classList.add("valid");
  }
});

//COUNTRY
function checkCountry(country) {
  //Should only contain word and should start with capital letter
  const countryValidator = /^[A-Z][a-z]+$/;
  if (countryValidator.test(country.value)) {
    return true;
  } else {
    return false;
  }
}

countryInput.addEventListener("input", () => {
  if (!checkCountry(countryInput)) {
    countryErrors.textContent =
      "The country should only contain words and start with capital letter";
    if (countryLabel.classList.contains("valid"))
      countryLabel.classList.remove("valid");
    countryLabel.classList.add("invalid");
  } else {
    countryErrors.textContent = "Great Country!";
    if (countryLabel.classList.contains("invalid"))
      countryLabel.classList.remove("invalid");
    countryLabel.classList.add("valid");
  }
});

//ZIP CODE
function checkZipCode(code) {
  //Maximun of 5 numeric digits
  const zipCodeValidator = /^[0,9]{5,5}$/;
  if (zipCodeValidator.test(code.value)) {
    return true;
  } else {
    return false;
  }
}

zipCodeInput.addEventListener("input", () => {
  if (!checkZipCode(zipCodeInput)) {
    zipCodeErrors.textContent =
      "The zip code should ONLY have 5 numeric characters";
    if (zipCodeLabel.classList.contains("valid"))
      zipCodeLabel.classList.remove("valid");
    zipCodeLabel.classList.add("invalid");
  } else {
    zipCodeErrors.textContent = "Valid Zip Code";
    if (zipCodeLabel.classList.contains("invalid"))
      zipCodeLabel.classList.remove("invalid");
    zipCodeLabel.classList.add("valid");
  }
});

//PASSWORD
function checkPassword(password) {
  //Should only contain word and should start with capital letter
  const passwordValidator = /^[A-Za-z0-9!|"@·#$%&¬/()=?'¿¡]{8,20}$/;
  if (passwordValidator.test(password.value)) {
    return true;
  } else {
    return false;
  }
}

passwordInput.addEventListener("input", () => {
  if (!checkPassword(passwordInput)) {
    passwordErrors.textContent = `
    The password should have a minimun of 8 and a maximun of 20 ofo the following digits: 
      - Upper and lowercase words
      - Numbers
      - !, |, ", @, ·, #, $, %, &, ¬, /, (, ), =, ?, ', ¿, ¡,
    `;
    if (passwordLabel.classList.contains("valid"))
      passwordLabel.classList.remove("valid");
    passwordLabel.classList.add("invalid");
  } else {
    passwordErrors.textContent = "Correct Password";
    if (passwordLabel.classList.contains("invalid"))
      passwordLabel.classList.remove("invalid");
    passwordLabel.classList.add("valid");
  }
});

//Confirm password

function confirmPassword(confirmation, password) {
  if (
    //avoid false value if there is an acute character
    confirmation.value.normalize() === password.value.normalize()
  ) {
    return true;
  } else {
    return false;
  }
}

confirmPasswordInput.addEventListener("input", () => {
  if (!confirmPassword(confirmPasswordInput, passwordInput)) {
    confirmPasswordErrors.textContent = "The passwords don't match";
    if (confirmPasswordLabel.classList.contains("valid"))
      confirmPasswordLabel.classList.remove("valid");
    confirmPasswordLabel.classList.add("invalid");
  } else {
    confirmPasswordErrors.textContent = "Equal Passwords!";
    if (confirmPasswordLabel.classList.contains("invalid"))
      confirmPasswordLabel.classList.remove("invalid");
    confirmPasswordLabel.classList.add("valid");
  }
});

//Send Form

sendButton.addEventListener("click", (e) => {
  if (
    checkEmail(emailInput) &&
    checkCountry(countryInput) &&
    checkZipCode(zipCodeInput) &&
    checkPassword(passwordInput) &&
    confirmPassword(confirmPasswordInput, passwordInput)
  ) {
    formValidationSection.innerHTML = "Form correctly filled and sent";
  } else {
    e.preventDefault();
    formValidationSection.innerHTML =
      "Please, make sure every field is correctly filled";
  }
});
