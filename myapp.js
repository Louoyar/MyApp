console.log("== Server started ");

//Don't forget to do 'npm update' before starting the server

// Import express
var express = require("express");

// Run express (by calling it)
var app = express();

// Import body-parser
var bodyParser = require("body-parser");
// Let express use body-parser

app.use(bodyParser.urlencoded({extended:true}));

var validPass = require("./passwordChecker.js");

// Do this for any GET request to /
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/homepage.html");
});

app.post("/login", function (req, res) {
    if (!validPass(req.body.personPassword)) {
        res.send("bad password");
    } else {
        res.send("very nice!");
    }
});

// Listen for requests on port 3000 (can change)
app.listen(3000);