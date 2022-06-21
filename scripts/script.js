const form = document.getElementById("form");
const password = document.getElementById("password");
const confirmPass = document.getElementById("confirmPass");
const passwordInput = document.getElementById("passwordInput");
const errorMessage = document.createElement("p");

form.addEventListener('submit', e => {
    if(password.value !== confirmPass.value) {
        e.preventDefault();
        password.classList.add("error");
        confirmPass.classList.add("error");

        if(errorMessage.parentElement !== passwordInput) {
            errorMessage.innerText = "* Passwords do not match";
            errorMessage.classList.add("error-message");
            passwordInput.append(errorMessage);
        }
    }
});








