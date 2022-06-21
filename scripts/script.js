const form = document.getElementById("form");
const password = document.getElementById("password");
const confirmPass = document.getElementById("confirmPass");

form.addEventListener('submit', e => {
    if(password.value !== confirmPass.value) {
        e.preventDefault();
        password.classList.add("error");
        confirmPass.classList.add("error");

        const errorMessage = document.createElement("p");
        errorMessage.innerText = "* Passwords do not match";
        errorMessage.classList.add("error-message");
        password.after(errorMessage);
    }
});








