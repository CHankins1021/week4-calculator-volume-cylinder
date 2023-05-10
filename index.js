//jshint esversion:6

// create an express object from the express package
const express = require("express");
const bodyParser = require("body-parser");

// create an app object from the express object
const app = express();
// this allows the parsing of the html file using body parser
app.use(bodyParser.urlencoded({extended: true}));

//this sends the html file to the web page using the root directory
app.get("/ConeCalc", function(req, res) {
res.sendFile(__dirname + "/ConeCalculator.html")
});

// this gets the response from the values in the web page
app.post("/", function(req, res){

//use n1 for radius and n2 for height
let radius = Number(req.body.radius);
let height = Number(req.body.height);

// does the computation of the input variables, as numbers
let volCone = (Math.PI * Math.pow(radius, 2) * height) / 3;
let coneHeight = (3 * volCone) / (Math.PI * Math.pow(radius, 2));

// sends the results back to the web page as string
res.send("The height of the cone is " + coneHeight.toFixed(2));
});

app.listen(3000, function() {
console.log ("Server is running on port 3000")
});
