const HttpError = require("../models/HttpError")

const MainAdmin = require("../models/MainAdmin")

const login = async (req, res, next) => {
    const { name, password } = req.body


    const createdAdmin = new MainAdmin({
        name: "gavin",
        password: "password"
    })







}

const createAdmin = async (req, res, next) => {

    const { name, password } = req.body



}