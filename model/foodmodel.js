const mongoose = require("mongoose");

const foodsSchema = mongoose.schema({

    name : {type: String, require},
    varirents : [],
    prices : [],
    category: [],
    image : {type: String, require},
    description : {type: String, require}
}, {
    timestamps: true,
})

const foodModel = mongoose.model('food', foodsSchema)