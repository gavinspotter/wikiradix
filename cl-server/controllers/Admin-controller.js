const HttpError = require("../models/HttpError")

const Admin = require("../models/Admin")
const MainAdmin = require("../models/MainAdmin")


const requestAdminPermission = async (req, res, next) => {

    const {
        username,
        password
    } = req.body





}


exports.requestAdminPermission = requestAdminPermission