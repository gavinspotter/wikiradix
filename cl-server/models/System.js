const mongoose = require("mongoose")


const Schema = mongoose.Schema

const systemSchema = Schema({
    systemName: { type: String, required: true },
    description: { type: String },
    image: [{
        renditions: [{
            imageString: { type: String },
            date: { type: Date }
        }],
        currentImage: { type: String },

    }],
    organism: { type: mongoose.Types.ObjectId, ref: "Organism" },
    organs: [{ type: mongoose.Types.ObjectId, ref: "Organ" }]
})


module.exports = mongoose.model("System", systemSchema)