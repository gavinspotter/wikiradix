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
    system: {},
    organipar: [{}]

})