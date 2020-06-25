//Imports
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');

const route = require("./routes/route");

//mongo connection
mongoose.connect("mongodb://localhost:27017/phonebook", { useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.on('connected',()=>{
    console.log("Connected to the Database");
});
mongoose.connection.on('error',(err)=>{
    if(err)
    console.log("Error connecting Database "+ err);
});

//Setups
const app = express();
const port = 3000;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use("/api", route);
app.use(cors());


//Front -- static files
app.use(express.static(path.join(__dirname,"public")));

//Methods

app.listen(port,()=>{
    console.log("Server is started on port "+ port);
});