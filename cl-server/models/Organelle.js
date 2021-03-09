const mongoose = require("mongoose")


const Schema = mongoose.Schema

const organelleSchema = Schema({
    name: { type: String, required: true },
    description: { type: String },
    image: [{
        renditions: [{
            imageString: { type: String },
            date: { type: Date }
        }],
        currentImage: { type: String },

    }],
    cell: { type: mongoose.Types.ObjectId, ref: "Cell" },
    celluels: [{ type: mongoose.Types.ObjectId, ref: "Celluel" }]
})