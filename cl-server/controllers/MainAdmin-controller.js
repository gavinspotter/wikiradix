const HttpError = require("../models/HttpError")

const MainAdmin = require("../models/MainAdmin")

const login = async (req, res, next) => {
    const { name, password } = req.body


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





}

const createAdmin = async (req, res, next) => {

    const { name, password } = req.body



}