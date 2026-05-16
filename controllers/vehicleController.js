const getOptimalSchedule = async (req, res) => {

    try {

        res.json({
            message: "Vehicle Scheduler API Working"
        });

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }

};

module.exports = {
    getOptimalSchedule
};