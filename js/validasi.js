const form = document.getElementById('membership-form');

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!validasi(form)) return;
    alert("Success");
});

const validasi = (form) => {
    let valid = true;
    let name = form.querySelector(".name");
    let email = form.querySelector(".email");
    let address = form.querySelector(".address");

    if (name.value == "") {
        giveError(name, "Please enter your name");
        valid = false;
    }
    if (email.value == "") {
        giveError(email, "Please enter your email");
        valid = false;
    }
    if (address.value == "") {
        giveError(address, "Please enter your address");
        valid = false;
    }

    let emailRegex = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/;
    let emailValue = email.value;
    if (!emailRegex.test(emailValue)) {
        giveError(email, "Please enter a valid email");
        valid = false;
    }

    if (valid) {
        return true;
    }
}

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
}

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
}