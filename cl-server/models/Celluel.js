const mongoose = require("mongoose")


const Schema = mongoose.Schema

const celluelSchema = Schema({
    name: { type: String, required: true },
    description: { type: String },
    image: [{
        renditions: [{
            imageString: { type: String },
            date: { type: Date }
        }],
        currentImage: { type: String },

    }],
    organelle: { type: String },
    chemicalCompounds: [{ type: mongoose.Types.ObjectId, ref: "chemicalCompound" }]
})

module.exports = mongoose.model("Celluel", celluelSchema)