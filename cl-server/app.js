const express = require("express")
const bodyParser = require("body-parser")

const app = express()

app.use(bodyParser.json())




app.use((error, req, res, next) => {
    if (res.headerSent) {
        return next(error);
    }
    res.status(error.code || 500);
    res.json({ message: error.message || "an unknown error occured" });
});