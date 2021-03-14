const mongoose = require("mongoose")
const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema

const adminSchema = Schema({
    username: { required: true, type: String, unique: true },
    password: { required: true, type: String },
    email: { required: true, type: String },
    profilePicture: { type: String, required: true }
})

module.exports = mongoose.model("admin", adminSchema)