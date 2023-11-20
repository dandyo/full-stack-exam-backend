const mongoose = require('mongoose')
const validator = require('validator')

const Schema = mongoose.Schema

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required
    },
    // image: {
    //     type: String,
    //     required: true
    // },
    description: {
        type: String,
    }
}, { timestamps: true })