const mongoose = require("mongoose")

const Schema = mongoose.Schema

const orderSchema = Schema({
    name: { type: String, required: true },
    description: { type: String },
    family: [{ type: mongoose.Types.ObjectId, required: true, ref: "Family" }],
    class: { type: mongoose.Types.ObjectId, ref: "Class" }
})

module.exports = mongoose.model("Order", orderSchema)