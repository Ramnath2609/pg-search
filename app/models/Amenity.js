const mongoose = require('mongoose')
const Schema = mongoose.Schema

const amenitySchema = new Schema ({
    name : {
        type : String,
        required : true
    },
    createdAt : {
        type : Date,
        default : new Date
    }
})

const Amenity = mongoose.model('Amenity',amenitySchema)

module.exports = Amenity