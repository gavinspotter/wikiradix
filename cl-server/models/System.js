const mongoose = require("mongoose")
const Etymology = require("./Etymology")


const Schema = mongoose.Schema

const systemSchema = Schema({
    systemName: { type: String, required: true },
    description: { type: String },
    image: [{
        renditions: [{
            imageString: { type: String },
            date: { type: Date },
            reference: { type: String },
            license: { type: String }
        }],
        currentImage: { type: String },

    }],
    chemicalCompounds: {

        composure: [{ type: mongoose.Types.ObjectId, ref: "ChemicalCompound" }],
        foreignMolecule: [{ type: mongoose.Types.ObjectId, ref: "ChemicalCompound" }, {
            changeInCell: [
                {
                    renditions: [{
                        imageString: { type: String },
                        date: { type: Date },
                        reference: { type: String },
                        license: { type: String }
                    }],
                    currentImage: { type: String },
                    celluelTectonicStep: { type: Number }

                }]
        }
        ]
    },
    organism: { type: mongoose.Types.ObjectId, ref: "Organism" },
    organs: [{ type: mongoose.Types.ObjectId, ref: "Organ" }],
    disorders: [{ type: mongoose.Types.ObjectId, ref: "Disorder" }],
    etymology: [{ type: mongoose.Types.ObjectId, ref: "Etymology" }]
})


module.exports = mongoose.model("System", systemSchema)