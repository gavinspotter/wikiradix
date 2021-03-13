const mongoose = require("mongoose")


const Schema = mongoose.Schema

const chemicalCompoundSchema = Schema({
    name: { type: String, required: true },
    condensedFormula: { type: String },
    description: { type: String },
    refrences: [{ type: String }],
    lewisStructure: [{
        renditions: [{
            imageString: { type: String },
            date: { type: Date },
            reference: { type: String },
            license: { type: String }
        }],
        currentImage: { type: String },


    }],
    skeletalFormula: [{
        renditions: [{
            imageString: { type: String },
            date: { type: Date },
            reference: { type: String },
            license: { type: String }
        }],
        currentImage: { type: String },

    }],
    perspectiveDrawings: [{
        renditions: [{
            imageString: { type: String },
            date: { type: Date },
            reference: { type: String },
            license: { type: String }
        }],
        currentImage: { type: String },

    }],

    conformation: [{
        renditions: [{
            imageString: { type: String },
            date: { type: Date },
            reference: { type: String },
            license: { type: String }
        }],
        currentImage: { type: String },

    }],

    haworth: [{
        renditions: [{
            imageString: { type: String },
            date: { type: Date },
            reference: { type: String },
            license: { type: String }
        }],
        currentImage: { type: String },

    }],

    fischer: [{
        renditions: [{
            imageString: { type: String },
            date: { type: Date },
            reference: { type: String },
            license: { type: String }
        }],
        currentImage: { type: String },

    }],
    etymology: [{ type: mongoose.Types.ObjectId, ref: "Etymology" }]
})

module.exports = mongoose.model("ChemicalCompound", chemicalCompoundSchema)