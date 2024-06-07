const loginContainer = document.getElementById("loginContainer");
const registerContainer = document.getElementById("registerContainer");
const showLoginButton = document.getElementById("showLogin");
const showRegisterButton = document.getElementById("showRegister");

const loginSubmitButton = document.getElementById("loginSubmit");
const registerSubmitButton = document.getElementById("registerSubmit");

const login = async (loginData) => {
  const options = {
    method: "POST",
    body: JSON.stringify(loginData),
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await fetch("http://localhost:8080/api/auth/login", options);
  const data = await response.json();
  console.log(data);
  localStorage.setItem("userToken", data.token);
  return data;
};

const signUp = async (signUpData) => {
  const options = {
    method: "POST",
    body: JSON.stringify(signUpData),
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await fetch(
    "http://localhost:8080/api/auth/register",
    options
  );
  const data = await response.json();
  console.log(data);
  return data;
};

showLoginButton.addEventListener("click", (e) => {
  e.preventDefault();
  registerContainer.style.display = "none";
  loginContainer.style.display = "block";
});

showRegisterButton.addEventListener("click", (e) => {
  e.preventDefault();
  registerContainer.style.display = "block";
  loginContainer.style.display = "none";
});

loginSubmitButton.addEventListener("click", (e) => {
  e.preventDefault();
  const email = document.getElementById("loginInputEmail").value;
  const password = document.getElementById("loginInputPassword").value;

  const loginData = {
    email,
    password,
  };

  login(loginData);

  alert("Successfully logged in");

  window.location.href = "../index.html";
});

registerSubmitButton.addEventListener("click", (e) => {
  e.preventDefault();
  const username = document.getElementById("registerInputUsername").value;
  const email = document.getElementById("registerInputEmail").value;
  const password = document.getElementById("registerInputPassword").value;
  const firstName = document.getElementById("registerInputFirstName").value;
  const lastName = document.getElementById("registerInputLastName").value;
  const avatarUrl = document.getElementById("registerInputAvatarUrl").value;
  const userRole = document.getElementById("registerInputUserRole").value;

  const signUpData = {
    username,
    email,
    password,
    firstName,
    lastName,
    avatarUrl,
    userRole,
  };

  signUp(signUpData);

  registerContainer.style.display = "none";
  loginContainer.style.display = "block";
});

document.addEventListener("DOMContentLoaded", (e) => {
  e.preventDefault();
  registerContainer.style.display = "none";
  loginContainer.style.display = "none";
});
