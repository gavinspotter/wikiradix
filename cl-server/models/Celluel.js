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
    organelle: { type: mongoose.Types.ObjectId, ref: "Organelle" },
    chemicalCompounds: [{ type: mongoose.Types.ObjectId, ref: "ChemicalCompound" }]
})

module.exports = mongoose.model("Celluel", celluelSchema)