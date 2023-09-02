const list = document.querySelector(".header-list");

document.querySelector("#hamburger").onclick = () => {
  list.classList.toggle("active");
};

const menu = document.querySelector("#hamburger");

document.addEventListener("click", function (e) {
  if (!list.contains(e.target) && !menu.contains(e.target)) {
    list.classList.remove("active");
  }
});

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!validasi(form)) return;
  alert("Success");
});

const validasi = (form) => {
  let valid = true;
  let name = form.querySelector(".name");
  let message = form.querySelector(".message");
  let email = form.querySelector(".email");
  let region = form.querySelector(".region");

  if (name.value == "") {
    giveError(name, "Please enter your name");
    valid = false;
  }
  if (region.value == "") {
    giveError(region, "Please enter your region");
    valid = false;
  }
  if (message.value == "") {
    giveError(message, "Please enter message");
    valid = false;
  }

  let emailRegex = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm;
  let emailValue = email.value;
  if (!emailRegex.test(emailValue)) {
    giveError(email, "Please enter a valid email");
    valid = false;
  }

  if (valid) {
    return true;
  }
};

const giveError = (field, message) => {
  let parentElement = field.parentElement;
  parentElement.classList.add("error");
  let existingError = parentElement.querySelector(".err-msg");
  if (existingError) {
    existingError.remove();
  }
  let error = document.createElement("span");
  error.textContent = message;
  error.classList.add("err-msg");
  parentElement.appendChild(error);
};

const inputs = document.querySelectorAll("input");
const textareas = document.querySelectorAll("textarea");

let allFields = [...inputs, ...textareas];

allFields.forEach((field) => {
  field.addEventListener("input", () => {
    removeError(field);
  });
});

const removeError = (field) => {
  let parentElement = field.parentElement;
  parentElement.classList.remove("error");
  let error = parentElement.querySelector(".err-msg");
  if (error) {
    error.remove();
  }
};
