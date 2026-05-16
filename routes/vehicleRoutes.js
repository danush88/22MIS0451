const express = require("express");

const router = express.Router();

const {
    getOptimalSchedule
} = require("../controllers/vehicleController");

router.get("/schedule", getOptimalSchedule);

module.exports = router;