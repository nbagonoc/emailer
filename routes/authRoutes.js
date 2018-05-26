const passport = require("passport");

module.exports = app => {
  // GET | google oauth
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );
  // GET | redirect user after google oauth
  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      res.redirect("/surveys");
    }
  );

  // GET | lougout user
  app.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  // GET | check current user (test?)
  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};
