const express = require("express");

const router = express.Router();

const {
    getVehicles,
    addVehicle
} = require("../controllers/vehicleController");

router.get("/vehicles", getVehicles);

router.post("/vehicles", addVehicle);

module.exports = router;