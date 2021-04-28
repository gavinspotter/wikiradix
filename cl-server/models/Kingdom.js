const mongoose = require("mongoose")

const Schema = mongoose.Schema

const kingdomSchema = Schema({
    name: { type: String, required: true },
    description: { type: String },
    phylum: [{ type: mongoose.Types.ObjectId, required: true, ref: "Phylum" }],
    domain: { type: mongoose.Types.ObjectId, ref: "Domain" }
})

module.exports = mongoose.model("Kingdom", kingdomSchema)