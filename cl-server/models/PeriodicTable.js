const mongoose = require("mongoose")

const Schema = mongoose.Schema

const periodicTableSchema = Schema({
    AtomicNumber: { type: Number, required: true },
    ElementSymbol: { type: String, required: true },
    ElementName: { type: String, required: true },
    AtomicWeight: { type: Number, required: true },
    Property: { type: String }

})

