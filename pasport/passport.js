const LocalStrategy = require("passport-local").Strategy();

module.exports = function () {
  passport.use(new LocalStrategy({ usernameField: "username" }));
};
