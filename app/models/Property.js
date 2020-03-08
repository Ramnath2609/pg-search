const mongoose = require('mongoose')
const Schema = mongoose.Schema

const propertySchema = new Schema ({
    name : {
        type : String,
        required : true
    },
    owner : {
        type : Schema.Types.ObjectId
    },
    address : {
        location : {
            type : String
        },
        city : {
            type : String
        },
        state : {
            type : String
        },
        geo : {
            lat : {
                type : String
            },
            lng : {
                type : String
            }
        }
    },
    pgType : {
        type : String,
        enum : ['gents', 'ladies', 'coliving']
    },
    landmark : {
        type : String
    },
    amenities : [
        {
            type : Schema.Types.ObjectId
        }
    ],
    food : {
        type : String
    },
    verified : {
        type : Boolean,
        default : false
    },
    priceRange : {
        type : String
    },
    images : [
        {
            type : String
        }
    ],
    sharingType : {
        type : Array
    }
})

const Property = mongoose.model('Property', propertySchema)

module.exports = Property