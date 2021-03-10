const mongoose = require("mongoose")

const Schema = mongoose.Schema

const wordSchema = Schema({
    word: { type: String, required: true },
    definition: [{
        type: String, required: true
    }],
    etymology: [{ type: mongoose.Types.ObjectId, ref: "Etymology" }]
})

module.exports = mongoose.model("Word", wordSchema)