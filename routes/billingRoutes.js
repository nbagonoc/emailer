const db_secret = require("../config/db_secret");
const stripe = require("stripe")(db_secret.stripeSecretKey);
const requireLogin = require("../middlewares/requireLogin");

module.exports = app => {
  //   stripe function receiving stripe token from react action to be placed in our api
  app.post("/api/stripe", requireLogin, async (req, res) => {
    const charge = await stripe.charges.create({
      amount: 500,
      currency: "usd",
      description: "$5 for 5 credits",
      source: req.body.id
    });

    req.user.credits += 5;
    const user = await req.user.save();

    res.send(user);
  });
};
