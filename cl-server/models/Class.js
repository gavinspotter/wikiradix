const mongoose = require("mongoose")

const Schema = mongoose.Schema

const classSchema = Schema({
    name: { type: String, required: true },
    description: { type: String },
    order: [{ type: mongoose.Types.ObjectId, required: true, ref: "Order" }],
    phylum: { type: mongoose.Types.ObjectId, ref: "Phylum" }
})

module.exports = mongoose.model("Class", classSchema)