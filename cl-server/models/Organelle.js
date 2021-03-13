const mongoose = require("mongoose")


const Schema = mongoose.Schema

const organelleSchema = Schema({
    name: { type: String, required: true },
    description: [{
        statement: { type: String },
        refrence: { type: String }
    }],
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
    cell: { type: mongoose.Types.ObjectId, ref: "Cell" },
    celluels: [{ type: mongoose.Types.ObjectId, ref: "Celluel" }],
    disorders: [{ type: mongoose.Types.ObjectId, ref: "Disorder" }],
    etymology: [{ type: mongoose.Types.ObjectId, ref: "Etymology" }]
})