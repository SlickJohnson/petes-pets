const Pet = require("../models/pet");

module.exports = app => {
  /* GET home page. */
  app.get("/", (req, res) => {
    Pet.paginate().then(results => {
      res.render("pets-index", { pets: results.docs });
    });
  });
};
