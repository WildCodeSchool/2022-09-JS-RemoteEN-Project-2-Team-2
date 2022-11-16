const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");

const weatherController = require("./controllers/weatherController");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

router.post("/weather/subscribe", weatherController.subscribe);

module.exports = router;
