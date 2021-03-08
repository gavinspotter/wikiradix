const mongoose = require("mongoose")


const Schema = mongoose.Schema

const systemSchema = Schema({
    systemName: { type: String, required: true },
    description: { type: String }
    image: { type: String },
    organs: [{}]
})


module.exports = mongoose.model("System", systemSchema)