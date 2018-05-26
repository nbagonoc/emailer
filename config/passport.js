const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const db_secret = require("./db_secret");

// MODELS
const User = mongoose.model("users");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: db_secret.googleClientID,
      clientSecret: db_secret.googleClientSecret,
      callbackURL: "/auth/google/callback",
      // fix google http https proxy issue
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id });
      if (existingUser) {
        // already have record with the google ID
        done(null, existingUser);
      } else {
        // no user record, create record
        const user = await new User({ googleId: profile.id }).save();
        done(null, user);
      }
    }
  )
);
