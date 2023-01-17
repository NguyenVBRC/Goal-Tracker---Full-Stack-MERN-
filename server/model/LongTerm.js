const mongoose = require("mongoose");

const goalsSchema = new mongoose.Schema({
    type: {
        type: String
    },
    title: {
        type: String
    }
});

const Goals = mongoose.model("goal", goalsSchema);
module.exports = Goals;