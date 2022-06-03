const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const PORT = 8000;

// Mongoose & MongoDB  connection
const databaseUrl = "mongodb://localhost:27017/ussd";
mongoose.connect(databaseUrl);
const db = mongoose.connection;

db.on("error", (err) => {
    console.log(err);
});

db.once("open", () => {
    console.log("Database running");
});

// Body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// When the application runs
app.get("/", (req, res) => res.send("Hello World!"));
app.post("/", (req, res) => {
    const { phoneNumber, sessionId, text } = req.body;

    // Checking if there is a response from the USSD
    let response;

    if (text === "") {
        response = "CON Enter your first name";
    } else if (text !== "") {
    }

    setTimeout(() => {
        console.log(text);
        res.send(response);
        res.end();
    }, 2000);
});
