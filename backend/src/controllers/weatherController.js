const models = require("../models");

const subscribe = (req, res) => {
  const item = req.body;

  models.weather
    .insert(item)
    .then(() => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  subscribe,
};

/* try
 */
