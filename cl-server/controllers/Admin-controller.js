const HttpError = require("../models/HttpError")

const Admin = require("../models/Admin")
const MainAdmin = require("../models/MainAdmin")


const requestAdminPermission = async (req, res, next) => {

    const {
        username,
        email,
        password
    } = req.body

    let existingUser

    try {
        existingUser = await Admin.findOne({ username })
    } catch (err) {
        const error = new HttpError(
            "couldnt find email",
            500
        )
        return next(error)
    }

    if (existingUser) {
        const error = new HttpError(
            "user already exists",
            422
        )
    }



}


exports.requestAdminPermission = requestAdminPermission