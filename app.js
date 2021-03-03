const express = require("express");
const path = require("path");
const db = require("./db/database");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const expressLayouts = require("express-ejs-layouts");
const session = require("express-session");
const app = express();
const PORT = 3000;
// TODO environment variables
// require('dotenv').config()

const indexRouter = require("./routes/index");
const loginRouter = require("./routes/login");
const signupRouter = require("./routes/signup");
const homepageRouter = require("./routes/homepage");
const errorRouter = require("./routes/error");
const employeePageRouter = require("./routes/employeePage");
const scheduleManagementRouter = require("./routes/scheduleManagement");
const logoutRouter = require("./routes/logout");

app.set("view engine", "ejs");

app.use(morgan("dev"));
app.use("/static", express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressLayouts);
app.use(
  session({
    // TODO cookie saved to and deleted from db store as well
    // store: new (require('connect-pg-simple')(session))(),
    key: "user_sid",
    // TODO store secret in .env
    secret: "secretstuff",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 3600000,
      sameSite: true,
    },
  })
);

app.use("/", indexRouter);
app.use("/login", loginRouter);
app.use("/signup", signupRouter);
app.use("/homepage", homepageRouter);
app.use("/error", errorRouter);
app.use("/employeePage", employeePageRouter);
app.use("/scheduleManagement", scheduleManagementRouter);
app.use("/logout", logoutRouter);

app.listen(PORT, () => {
  console.log(`server is listening on localhost${PORT}`);
});
