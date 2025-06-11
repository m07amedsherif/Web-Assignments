var Name = document.getElementById("name");
var email = document.getElementById("email");
var password = document.getElementById("password");
accounts = [];

if (localStorage.getItem("accounts")) {
  accounts = JSON.parse(localStorage.getItem("accounts"));
} else {
  localStorage.setItem("accounts", JSON.stringify(accounts));
}

function validEmail(Email) {
  var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var value = re.test(String(Email).toLowerCase());
  if (value) {
    email.classList.add("is-valid");
    email.classList.remove("is-invalid");
  } else {
    email.classList.add("is-invalid");
    email.classList.remove("is-valid");
  }
  return value;
}

function validPassword(Password) {
  var value = Password.length > 3;
  if (value) {
    password.classList.add("is-valid");
    password.classList.remove("is-invalid");
  } else {
    password.classList.add("is-invalid");
    password.classList.remove("is-valid");
  }
  return value;
}

function validateForm() {
  return validEmail(email.value) && validPassword(password.value);
}

function signUp() {
  if (validateForm()) {
    person = {
      name: Name.value,
      email: email.value,
      password: password.value,
    };
    accounts.push(person);
    localStorage.setItem("accounts", JSON.stringify(accounts));
    localStorage.setItem("currentUser", JSON.stringify(person));
    alert("Sign up successfully!");
    clearForm();
    window.location.href = "show.html";
  }
}

function signIn() {
  if (validateForm()) {
    var accounts = JSON.parse(localStorage.getItem("accounts")) || [];
    var user = accounts.find(function (acc) {
      return acc.email === email.value && acc.password === password.value;
    });
    if (user) {
      alert("Sign in successfully!");
      localStorage.setItem("currentUser", JSON.stringify(user));
      clearForm();
      window.location.href = "show.html";
    }
  }
}

function clearForm() {
  Name.value = "";
  email.value = "";
  password.value = "";
  email.classList.remove("is-valid", "is-invalid");
  password.classList.remove("is-valid", "is-invalid");
}

document.addEventListener("DOMContentLoaded", function () {
  const page = window.location.pathname.split("/").pop();

  if (page === "show.html") {
    hello();
  }
});

function hello() {
  document.getElementById("show").innerHTML = "<h1 class='text-info'>Hello " + JSON.parse(localStorage.getItem("currentUser")).name + "!</h1>";
}
