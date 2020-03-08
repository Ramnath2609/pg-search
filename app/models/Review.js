const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reviewSchema = new Schema({
    title : {
        type : String,
        required : true
    },
    body : {
        type : String,
        required : true
    },
    rating : {
        food : {
            type: String
        },
        cleanliness : {
            type: String
        },
        location : { 
            type : String
        }
    },
    user : {
        type : Schema.Types.ObjectId
    },
    property : {
        type : Schema.Types.ObjectId
    }
})

const Review = mongoose.model('Review', reviewSchema)

module.exports = Review