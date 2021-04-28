const mongoose = require("mongoose")

const Schema = mongoose.Schema

const phylumSchema = Schema({
    name: { type: String, required: true },
    description: { type: String },
    class: [{ type: mongoose.Types.ObjectId, required: true, ref: "Class" }],
    kingdom: { type: mongoose.Types.ObjectId, ref: "Kingdom" }
})

module.exports = mongoose.model("Phylum", phylumSchema)