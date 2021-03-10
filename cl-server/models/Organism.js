const mongoose = require("mongoose")

const Schema = mongoose.Schema

const organismSchema = Schema({
    name: { type: String, required: true },
    scientificName: { type: String, required: true },
    Systems: [{ type: mongoose.Types.ObjectId, ref: "System" }],
    disorders: [{ type: mongoose.Types.ObjectId, ref: "Disorder" }],
    etymology: [{ type: mongoose.Types.ObjectId, ref: "Etymology" }]
})

module.exports = mongoose.model("Organism", organismSchema)
