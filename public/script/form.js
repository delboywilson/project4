const form = document.getElementById("signup-form");
const lastName = document.getElementById("last_nameInput");
const firstName = document.getElementById("first_nameInput");
const email = document.getElementById("emailInput");
const password = document.getElementById("passwordInput");
const confirmPassword = document.getElementById("confirmPasswordInput");

form.addEventListener("submit", (e) => {
  if (!checkInputs()) {
    e.preventDefault();
  }
});

function checkInputs() {
  const lastNameValue = lastName.value;
  const firstNameValue = firstName.value;
  const emailValue = email.value;
  const passwordValue = password.value;
  const confirmPasswordValue = confirmPassword.value;

  if (lastNameValue === "") {
    setErrorFor(last_nameInput, "Last name is required");
  } else {
    setSuccessFor(last_nameInput);
  }

  if (firstNameValue === "") {
    setErrorFor(first_nameInput, "First name is required");
  } else {
    setSuccessFor(first_nameInput);
  }

  if (emailValue === "") {
    setErrorFor(emailInput, "Email address cannot be blank");
  } else if (!isEmail(emailValue)) {
    setErrorFor(emailInput, "Email is not a valid address");
  } else {
    setSuccessFor(emailInput);
  }

  if (passwordValue === "") {
    setErrorFor(passwordInput, "Password cannot be blank");
  } else if (!isPassword(passwordValue)) {
    setErrorFor(
      passwordInput,
      "At least six characters, lower and uppercase letter and numbers"
    );
  } else {
    setSuccessFor(passwordInput);
  }

  if (confirmPasswordValue === "") {
    setErrorFor(confirmPasswordInput, "Password cannot be blank");
  } else if (passwordValue != confirmPasswordValue) {
    console.log("this is", passwordValue);
    console.log("this is confirm", confirmPasswordValue);
    setErrorFor(confirmPasswordInput, "Password does not match");
  } else {
    setSuccessFor(confirmPasswordInput, "Password is a match");
  }
  return true;
}

// //LOGIN VALIDATION
// const loginForm = document.getElementById ("login-Form")
// const email1 = document.getElementById("InputEmail1")
// const password1 = document.getElementById("InputPassword1")

// loginForm.addEventListener("submit", e => {
//     e.preventDefault();
//     checkLogin();
// });

// function checkLogin() {
//     const emailValue1 = email1.value;
//     const passwordValue1 = password1.value;

//     if (emailValue1 === "") {
//         setErrorFor(emailInput, "Email address cannot be blank");
//     } else if (!isEmail(emailValue1)) {
//         setErrorFor(InputEmail1, "Email is not a valid address");
//     } else {
//         setSuccessFor(InputEmail1);
//     }

//     if (passwordValue === "") {
//         setErrorFor(Inputpassword1, "Password cannot be blank");
//     } else {
//         setSuccessFor(InputPassword1);
//     }

//     return true;
// }

// // TRIGGER

// function setErrorFor(input, message) {
//     const formControl = input.parentElement; //form-control
//     const errorMessage = formControl.querySelector("small");
//     errorMessage.innerText = message;
//     formControl.className = "form-control error";
// }

// function setSuccessFor(input) {
// 	const formControl = input.parentElement;
// 	formControl.className = "form-control success";
// }

// //REG EXPRESSION//

// function isEmail(emailInput) {
// 	const add = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// 	return add.test(emailInput);
// }

// function isPassword(passwordInput) {
//     const re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
//     return re.test(passwordInput);
// }

// //PASSWORD VISIBILITY
// const togglePassword = document.querySelector('#togglePassword');
// const passwordShow = document.querySelector('#passwordInput');

// togglePassword.addEventListener('click', function (e) {
//     // toggle the type attribute
//     const type = passwordShow.getAttribute('type') === 'password' ? 'text' : 'password';
//     passwordShow.setAttribute('type', type);
//     // toggle the eye slash icon
//     this.classList.toggle('fa-eye-slash');
// });
