const express = require("express")
const bodyParser = require("body-parser")
const HttpError = require("./models/HttpError")

const mongoose = require("mongoose")

const adminRoutes = require("./routes/MainAdmin-routes")
const userRoutes = require("./routes/User-route")


const app = express()

app.use(bodyParser.json())


app.use("/api/admin", adminRoutes)

app.use("/api/user", userRoutes)



app.use((req, res, next) => {
    const error = new HttpError("could not find this route", 404);
    throw error;
});


app.use((error, req, res, next) => {
    if (res.headerSent) {
        return next(error);
    }
    res.status(error.code || 500);
    res.json({ message: error.message || "an unknown error occured" });
});

mongoose
    .connect(
        `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.d3tnt.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
    )
    .then(() => {
        app.listen(process.env.PORT || 5000);
    })
    .catch((err) => {
        console.log(err);
    });
