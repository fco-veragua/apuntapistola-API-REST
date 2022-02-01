const cors = require('cors')
const express = require("express");
const controller = require("./controllers.js");


const router = express.Router();


// --------------- API REST CRUD // - armas y armaduras

router.get("/armas", cors(), controller.readArmas); // Read All
router.get("/armas/:id", cors(), controller.readArma); // Read
router.delete("/armas/:id", cors(), controller.deleteArma); // Delete
router.put("/armas/:id", cors(), controller.updateArma); // Update
router.post("/armas", cors(), controller.createArma); // Create

router.get("/tiradores", cors(), controller.readTiradores); // Read All
router.get("/tiradores/:id", cors(), controller.readTirador); // Read
router.delete("/tiradores/:id", cors(), controller.deleteTirador); // Delete
router.put("/tiradores/:id", cors(), controller.updateTirador); // Update
router.post("/tiradores", cors(), controller.createTirador); // Create


module.exports = router;