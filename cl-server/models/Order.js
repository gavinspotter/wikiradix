const mongoose = require("mongoose")

const Schema = mongoose.Schema

const domainSchema = Schema({
    name: { type: String, required: true },
    description: { type: String },
    kingdoms: [{ type: mongoose.Types.ObjectId, required: true }]
})

module.exports = mongoose.model("Domain", domainSchema)