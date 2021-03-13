const mongoose = require("mongoose")

const Schema = mongoose.Schema

const adminSchema = Schema({
    username: { required: true, type: String },
    password: { required: true, type: String }
})