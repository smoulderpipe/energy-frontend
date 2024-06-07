const loginContainer = document.getElementById("loginContainer");
const registerContainer = document.getElementById("registerContainer");
const loginSubmitButton = document.getElementById("loginSubmit");
const registerSubmitButton = document.getElementById("registerSubmit");
const showLoginButton = document.getElementById("showLogin");
const showRegisterButton = document.getElementById("showRegister");

showLoginButton.addEventListener("click", (e)=> {
    e.preventDefault();
    registerContainer.style.display = "none";
    loginContainer.style.display = "block";
})

showRegisterButton.addEventListener("click", (e)=> {
    e.preventDefault();
    registerContainer.style.display = "block";
    loginContainer.style.display = "none";
})

document.addEventListener("DOMContentLoaded", (e) => {
    e.preventDefault();
    registerContainer.style.display = "none";
    loginContainer.style.display = "none";
})