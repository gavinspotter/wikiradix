const mongoose = require("mongoose")

const Schema = mongoose.Schema

const organismSchema = Schema({
    name: { type: String, required: true },
    scientificName: { type: String, required: true },
    Systems: [{ type: mongoose.Types.ObjectId, ref: "System" }],
    disorders: [{ type: mongoose.Types.ObjectId, ref: "Disorder" }]

})

module.exports = mongoose.model("Organism", organismSchema)
