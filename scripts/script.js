const form = document.getElementById("form");
const password = document.getElementById("password");
const confirmPass = document.getElementById("confirmpass");

form.addEventListener('submit', e => {
    if(password !== confirmPass) {
        e.preventDefault();
        console.log("WRONG SHIT");
    }
});








