const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require("body-parser");

const app = express();

// MODELS
require("./models/User");

// CONFIGS
// DB and secrets
const db = require("./config/db_secret");
// Passport
require("./config/passport");

// CONNECT TO DATABASE
mongoose
  .connect(db.mongoURI)
  .then(() => console.log("we are connected"))
  .catch(err => console.log(err));

// MIDDLEWARES
// cookie-session
app.use(
  cookieSession({
    // 30 days
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [db.cookieKey]
  })
);
// passport
app.use(passport.initialize());
app.use(passport.session());
// body-parser
app.use(bodyParser.json());

// ROUTES
// auth route
require("./routes/authRoutes")(app);
// billing routes
require("./routes/billingRoutes")(app);

// serve production assets
app.use(express.static("client/build"));

// routing for production
if (process.env.NODE_ENV === "production") {
  const path = require("path");
  app.get("/*", (req, res) => {
    res.sendfile(path.resolve(__dirname, "../client", "build", "index.html"));
  });
}

// PORT
const PORT = process.env.PORT || 5000;
app.listen(PORT);
