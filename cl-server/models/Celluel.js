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
    chemicalCompounds: {

        composure: [{ type: mongoose.Types.ObjectId, ref: "ChemicalCompound" }],
        foreignMolecule: [{ type: mongoose.Types.ObjectId, ref: "ChemicalCompound" }, {
            changeInCell: [
                {
                    renditions: [{
                        imageString: { type: String },
                        date: { type: Date }
                    }],
                    currentImage: { type: String },
                    celluelTectonicStep: { type: Number }

                }]
        }
        ]
    },
    disorders: [{ type: mongoose.Types.ObjectId, ref: "Disorder" }]
})

module.exports = mongoose.model("Celluel", celluelSchema)