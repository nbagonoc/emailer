const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require("body-parser");

const app = express();

// MODELS
require("./models/User");
require("./models/Survey");

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
require("./routes/authRoutes")(app);
require("./routes/billingRoutes")(app);
require("./routes/surveyRoutes")(app);

if (process.env.NODE_ENV === "production") {
  // Express will serve up production assets
  // like our main.js file, or main.css file!
  app.use(express.static("client/build"));

  // Express will serve up the index.html file
  // if it doesn't recognize the route
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// PORT
const PORT = process.env.PORT || 5000;
app.listen(PORT);
