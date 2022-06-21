

// Checks if the password and confirmed password are the same
const form = document.getElementById("form");
const password = document.getElementById("password");
const confirmPass = document.getElementById("confirmPass");
const passwordInput = document.getElementById("passwordInput");

const errorMessage = document.createElement("p"); // New element for error

form.addEventListener('submit', e => {
    if(password.value !== confirmPass.value) {
        e.preventDefault(); // Prevents the page from refreshing

        // Adds error class to the password textboxes to make them red
        password.classList.add("error");
        confirmPass.classList.add("error");

        // Adds the error message below the password (not confirmPass) textbox
        // Checks if an error already exists, if no message exists then run this
        if(errorMessage.parentElement !== passwordInput) {
            errorMessage.innerText = "* Passwords do not match";
            errorMessage.classList.add("error-message");
            passwordInput.append(errorMessage);
        }
    }
});








