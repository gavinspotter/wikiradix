const mongoose = require("mongoose")


const Schema = mongoose.Schema

const cellSchema = Schema({
    name: { type: String, required: true },
    description: { type: String },
    image: [{
        renditions: [{
            imageString: { type: String },
            date: { type: Date }
        }],
        currentImage: { type: String },

    }],
    organipar: [{ type: mongoose.Types.ObjectId, ref: "Organipar" }],
    organelles: [{ type: mongoose.Types.ObjectId, ref: "Organelle" }]

})
