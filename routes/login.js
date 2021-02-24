const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('pages/login')
})

router.post('/login', (req, res) => {
  const hashSymbols = crypto.createHash('sha256').update(req.body.password).digest('hex')
  const newSchedule = {
    email: req.body.email,
    password: hashSymbols
  }
  // TODO work on password db
  db.schedules.push(newSchedule)
  res.redirect('/homepage')
})


// //VALIDATION FOR LOGIN
// const form = document.getElementById("login-form");
// const email = document.getElementById("InputEmail");
// const password = document.getElementById("InputPassword");

// form.addEventListener('submit', e => {
// 	e.preventDefault();

//     checkInputs();
    
//     console.log("here");    
// });

// function checkInputs(){
//     const emailValue = email.value;
//     const passwordValue = password.value;

//     if (emailValue === "") {
//         setErrorFor(email, "Email address cannot be blank");
//     } else if (!isEmail(emailValue)) {
//         setErrorFor(email, "Email is not a valid address");
//     } else {
//         setSuccessFor(email);
//     }

//     if (passwordValue === "") {
//         setErrorFor(text, "Message cannot be blank");
//     } else {
//         return true;
//     }

//     alert("hello");
// }



module.exports = router
