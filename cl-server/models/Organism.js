const mongoose = require("mongoose")

const Schema = mongoose.Schema

const organismSchema = Schema({
    name: { type: String, required: true },
    scientificName: { type: String, required: true },
    Systems: [{ type: mongoose.Types.ObjectId, required: true, ref: "System" }],
    disorders: [{ type: mongoose.Types.ObjectId, required: true, ref: "Disorder" }],
    etymology: [{ type: mongoose.Types.ObjectId, required: true, ref: "Etymology" }],
    species: [{ type: mongoose.Types.ObjectId }]
})

module.exports = mongoose.model("Organism", organismSchema)
