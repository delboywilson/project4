const redirectLogin = (req, res, next) => {
  if (!req.session.userID) {
    res.redirect("/login");
  } else {
    next();
  }
};

const redirectHomepage = (req, res, next) => {
  if (req.session.userID) {
    res.redirect("/homepage");
  } else {
    next();
  }
};

module.exports.redirectLogin = redirectLogin;
module.exports.redirectHomepage = redirectHomepage;
