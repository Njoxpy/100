const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");

passport.use(
  new GoogleStrategy(
    {
      // options for google stats
      ClientID: process.env.ClientID,
      ClientSecret: process.env.ClientSecret,
    },
    () => {
      // callback function passport
    }
  )
);
