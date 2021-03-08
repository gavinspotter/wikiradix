const mongoose = require("mongoose")


const Schema = mongoose.Schema

const organiparSchema = Schema({
    name: { type: String, required: true },
    description: { type: String },
    image: [{
        renditions: [{
            imageString: { type: String },
            date: { type: Date }
        }],
        currentImage: { type: String },

    }],
    organ: {},
    cell: [{}]
})

