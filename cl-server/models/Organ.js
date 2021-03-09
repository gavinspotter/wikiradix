const mongoose = require("mongoose")


const Schema = mongoose.Schema

const organSchema = Schema({
    name: { type: String, required: true },
    discription: { type: String, required: true },
    image: [{
        renditions: [{
            imageString: { type: String },
            date: { type: Date }
        }],
        currentImage: { type: String },

    }],
    system: { type: mongoose.Types.ObjectId, ref: "System" },
    organipars: [{ type: mongoose.Types.ObjectId, ref: "Organipar" }],
    disorders: [{ type: mongoose.Types.ObjectId, ref: "Disorder" }]
})

module.exports = mongoose.model("Organ", organSchema)