const mongoose = require("mongoose")
const uniqueValidator = require("mongoose-unique-validator");


const Schema = mongoose.Schema

const userSchema = Schema({
    username: { required: true, type: String, unique: true },
    password: { required: true, type: String },
    email: { required: true, type: String, unique: true },

})

module.exports = mongoose.model("User", userSchema)