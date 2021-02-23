const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('pages/signup')
})

router.post('/signup', (req, res) => {
  const hashSymbols = crypto.createHash('sha256').update(req.body.password).digest('hex')
  const newUser = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: hashSymbols
  }
  db.users.push(newUser)
  res.redirect('/users')
})

// app.route('/signup')
//     .get(sessionChecker, (req, res) => {
//         res.sendFile(__dirname + '/public/signup.html');
//     })
//     .post((req, res) => {
//         User.create({
//             username: req.body.username,
//             email: req.body.email,
//             password: req.body.password
//         })
//         .then(user => {
//             req.session.user = user.dataValues;
//             res.redirect('/dashboard');
//         })
//         .catch(error => {
//             res.redirect('/signup');
//         });
//     });

module.exports = router
