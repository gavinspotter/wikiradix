const mongoose = require("mongoose")

const Schema = mongoose.Schema

const etymologySchema = Schema({
    root: { type: String, required: true },
    definition: { type: String, required: true },
    language: { type: String },
    words: [{ type: mongoose.Types.ObjectId, ref: "Word" }]
})

module.exports = mongoose.model("Etymology", etymologySchema)