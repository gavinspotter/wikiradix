const express = require("express")

const mainadminController = require("../controllers/MainAdmin-controller")

const router = express.Router()

router.post("/createadmin", mainadminController.createAdmin)