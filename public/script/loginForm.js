//LOGIN VALIDATION
const loginForm = document.getElementById ("login-Form");
const emailOne = document.getElementById("inputEmail");
const passwordOne = document.getElementById("inputPassword");

loginForm.addEventListener("submit", e => {
    e.preventDefault();
    checkLoginInput();
});

function checkLoginInput() {
    const emailValueOne = emailOne.value;
    const passwordValueOne = passwordOne.value;

    if (emailValueOne === "") {
        setErrorFor(InputEmail, "Email address cannot be blank");
    } else if (!isEmail1(emailValueOne)) {
        setErrorFor(inputEmail, "Email is not a valid address");
    } else {
        setSuccessFor(inputEmail);
    }

    if (passwordValueOne === "") {
        setErrorFor(inputpassword, "Password cannot be blank");
    } else {
        setSuccessFor(inputPassword);
    }

    return true;
}




// TRIGGER 

function setErrorFor(input, message) {
    const formControl = input.parentElement; // .form-control
    const errorMessage = formControl.querySelector("small");
    errorMessage.innerText = message;
    formControl.className = "form-control error";    
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = "form-control success";
}


//REG EXPRESSION//

function isEmail1(inputEmail) {
	const add = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return add.test(inputEmail);
}
