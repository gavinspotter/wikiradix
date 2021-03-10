const mongoose = require("mongoose")

const Schema = mongoose.Schema

const periodicTableSchema = Schema({
    atomicNumber: { type: Number, required: true },
    elementSymbol: { type: String, required: true },
    elementName: { type: String, required: true },
    atomicWeight: { type: Number, required: true },
    property: { type: String },
    image: { type: String },
    etymology: [{ type: mongoose.Types.ObjectId, ref: "Etymology" }]
})

module.exports = mongoose.model("PeriodicTable", periodicTableSchema)