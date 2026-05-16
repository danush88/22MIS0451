const Log = require("../middleware/logger");

let vehicles = [];

const addVehicle = async (req, res) => {

    try {

        const vehicle = req.body;

        vehicles.push(vehicle);

        await Log(
            "backend",
            "info",
            "controller",
            "Vehicle added successfully"
        );

        res.status(201).json({
            message: "Vehicle added successfully",
            data: vehicle
        });

    } catch (error) {

        await Log(
            "backend",
            "error",
            "controller",
            error.message
        );

        res.status(500).json({
            error: error.message
        });
    }
};

const getVehicles = async (req, res) => {

    try {

        await Log(
            "backend",
            "info",
            "controller",
            "Fetched all vehicles"
        );

        res.json(vehicles);

    } catch (error) {

        await Log(
            "backend",
            "error",
            "controller",
            error.message
        );

        res.status(500).json({
            error: error.message
        });
    }
};

module.exports = {
    addVehicle,
    getVehicles
};