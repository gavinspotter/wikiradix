const mongoose = require("mongoose")

const Schema = mongoose.Schema

const organismSchema = Schema({
    name: { type: String, required: true },
    scientificName: { type: String, required: true },
    image: { type: String },
    Systems: [{}],

})

module.exports = mongoose.model("Organism", organismSchema)
