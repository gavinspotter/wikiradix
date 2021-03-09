const mongoose = require("mongoose")

const Schema = mongoose.Schema

const disorderSchema = Schema({
    name: { type: String, required: true },
    description: { type: String },
    image: [{
        renditions: [{
            imageString: { type: String },
            date: { type: Date }
        }],
        currentImage: { type: String },

    }],

    organism: { type: mongoose.Types.ObjectId, ref: "Organism" },
    systems: [{ type: mongoose.Types.ObjectId, ref: "System" },
    {
        image: [{
            renditions: [{
                imageString: { type: String },
                date: { type: Date }
            }],
            currentImage: { type: String },

        }],
    }

    ],
    organs: [{ type: mongoose.Types.ObjectId, ref: "Organ" },
    {
        image: [{
            renditions: [{
                imageString: { type: String },
                date: { type: Date }
            }],
            currentImage: { type: String },

        }],
    }],
    organipars: [{ type: mongoose.Types.ObjectId, ref: "Organipar" },
    {
        image: [{
            renditions: [{
                imageString: { type: String },
                date: { type: Date }
            }],
            currentImage: { type: String },

        }],
    }],
    cells: [{ type: mongoose.Types.ObjectId, ref: "Cell" },
    {
        image: [{
            renditions: [{
                imageString: { type: String },
                date: { type: Date }
            }],
            currentImage: { type: String },

        }],
    }],
    organelles: [{ type: mongoose.Types.ObjectId, ref: "Organelle" }, {
        image: [{
            renditions: [{
                imageString: { type: String },
                date: { type: Date }
            }],
            currentImage: { type: String },

        }],
    }],
    celluels: [{ type: mongoose.Types.ObjectId, ref: "Celluel" }, {
        image: [{
            renditions: [{
                imageString: { type: String },
                date: { type: Date }
            }],
            currentImage: { type: String },

        }],
    }],







})