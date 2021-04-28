const mongoose = require("mongoose")

const Schema = mongoose.Schema

const speciesSchema = Schema({
    name: { type: String, required: true },
    description: { type: String },
})

module.exports = mongoose.model("Species", speciesSchema)