const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    // internal_id: {type:Number, required:[true, "there was an error generating a number"]}
    name:{type:String, required: [true, "please provide a Product name"], minlength: [3, 'name is too short']},
    // Cuisine:{type: String, required: [true, "you must provide a Cuisine"], minlength: [3, 'Cuisine is too short']},
    QTY: {type: Number, min: [1, "There must be at least 1 of htis item"] ,required: [true, "Please Provide a Quantity"]},
    ProductPrice: {type: Number, min: [0.01, "We are not a charity"] ,required: [true, "Please Provide a price"], trim: false},
},{strict: true})

mongoose.model('Product',ProductSchema)



