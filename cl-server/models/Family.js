const mongoose = require("mongoose")

const Schema = mongoose.Schema

const familySchema = Schema({
    name: { type: String, required: true },
    description: { type: String },
    genus: [{ type: mongoose.Types.ObjectId, required: true, ref: "Genus" }],
    order: { type: mongoose.Types.ObjectId, ref: "Order" }
})

module.exports = mongoose.model("Family", familySchema)