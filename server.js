const express = require("express");

const Food = require('./models/foodmodel')

const app = express();
const db = require("./db");
app.use(express.json());



app.get("/", (req, res) => {
    res.send("Server working " + port);
});

app.get("/getFoods", (req, res) => {

    Food.find({} , (err , docs) => {
        if(err){
            console.log(err);
        }
        else {
            res.send(docs);
        }
    })
});


const port = process.env.PORT || 8000;

app.listen(port, () => 'Server running on port port ');