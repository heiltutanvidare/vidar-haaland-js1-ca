const submitMessage = document.querySelector(".formSubmitted");
const contactForm = document.querySelector("#contactForm");
contactForm.addEventListener("submit", validateForm);

function validateForm(event) {
    event.preventDefault();

    // Validate that the name has a value
    const name = document.querySelector("#name");
    const nameValue = name.value.trim();
    const nameError = document.querySelector("#nameError");
    let nameIsValid = false;

    if (nameValue) {
        nameError.style.display = "none";
        nameIsValid = true;
    } else {
        nameError.style.display = "block";
        nameIsValid = false;
    }

    // Validate that the answer has a value of at least 10 characters
    const answer = document.querySelector("#answer");
    const answerValue = answer.value.trim();
    const answerError = document.querySelector("#answerError");
    let answerIsValid = false;

    if (checkInputLength(answerValue, 10) === true) {
        answerError.style.display = "none";
        answerIsValid = true;
    } else {
        answerError.style.display = "block";
        answerIsValid = false;
    }

    // Validate that the email has a value and a valid format
    const email = document.querySelector("#email");
    const emailValue = email.value.trim();
    const emailError = document.querySelector("#emailError");
    const invalidEmailError = document.querySelector("#invalidEmailError");
    let emailIsValid = false;

    if (emailValue) {
        emailError.style.display = "none";
        emailIsValid = true;
    } else {
        emailError.style.display = "block";
        emailIsValid = false;
    }

    if (checkEmailFormat(emailValue) === true) {
        invalidEmailError.style.display = "none";
        emailIsValid = true;
    } else {
        invalidEmailError.style.display = "block";
        emailIsValid = false;
    }

    // Validate that the answer has a value of at least 15 characters
    const address = document.querySelector("#address");
    const addressValue = address.value.trim();
    const addressError = document.querySelector("#addressError");
    addressIsValid = false;

    if (checkInputLength(addressValue, 15) === true) {
        addressError.style.display = "none";
        addressIsValid = true;
    } else {
        addressError.style.display = "block";
        addressIsValid = false;
    }

    // Display form submitted message if all fields are valid
    if (
        nameIsValid === true &&
        answerIsValid === true &&
        emailIsValid === true &&
        addressIsValid === true
    ) {
        submitMessage.style.display = "block";
    } else {
        submitMessage.style.display = "none";
    }
}

// Function used to check the length of inputs
function checkInputLength(value, length) {
    const trimmedValue = value.trim();
    if (trimmedValue.length >= length) {
        return true;
    } else {
        return false;
    }
}

// Function used to validate the email format
function checkEmailFormat(email) {
    const regEx = /\S+@\S+\.\S+/;
    const emailFormat = regEx.test(email);
    return emailFormat;
}
