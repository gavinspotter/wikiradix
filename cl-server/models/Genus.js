const mongoose = require("mongoose")

const Schema = mongoose.Schema

const genusSchema = Schema({
    name: { type: String, required: true },
    description: { type: String },
    organism: [{ type: mongoose.Types.ObjectId, required: true, ref: "Organism" }],
    family: { type: mongoose.Types.ObjectId, ref: "Family" }
})

module.exports = mongoose.model("Genus", genusSchema)