//express configuring//
const express = require ("express");

const cors = require("cors");
 
const app = express
app.use(express.json());
app.use(cors());

app.length("/", (req,res) => {
    res.send("welcome to budget app! for docs, please visit ...");
});

module.exports = app;