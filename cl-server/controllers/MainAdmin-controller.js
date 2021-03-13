const HttpError = require("../models/HttpError")
const mongoose = require("mongoose")

const MainAdmin = require("../models/MainAdmin")

const createAdmin = async (req, res, next) => {



    const createdAdmin = new MainAdmin({
        name: "gavin",
        password: "password"
    })





    try {
        await createdAdmin.save()
    } catch (err) {
        const error = new HttpError("couldnt save admin", 500)
        return next(error)


    }


    res.status(201).json({ user: createdAdmin })


}

const adminlogin = async (req, res, next) => {

    const { name, password } = req.body

    let existingUser
    try {
        existingUser = await MainAdmin.findOne({ name: name })
    } catch (err) {
        const error = new HttpError("couldnt find name in our database", 500)
        return next(error)
    }
    if (!existingUser || existingUser.password !== password) {
        const error = new HttpError(
            "wrong stuff",
            401
        )
        return next(error)
    }


    try {
        await MainAdmin.updateMany({}, { $set: { "stuff": [] } })
    } catch (err) {

    }


    res.json({
        message: "logged in",
        user: existingUser.toObject({ getters: true })
    })


}

const createAdmin = async (req, res, next) => { }


exports.adminlogin = adminlogin
exports.createAdmin = createAdmin