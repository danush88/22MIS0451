const vehicles = [];

const getVehicles = (req, res) => {

    res.json(vehicles);

};

const addVehicle = (req, res) => {

    try {

        const vehicle = req.body;

        vehicles.push(vehicle);

        res.status(201).json({
            message: "Vehicle added successfully",
            data: vehicle
        });

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }

};

module.exports = {
    getVehicles,
    addVehicle
};