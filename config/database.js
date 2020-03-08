const mongoose = require('mongoose')

const setUpDB = () => {
    mongoose.connect('mongodb://localhost:27017/pg-search', { useNewUrlParser : true, useUnifiedTopology : true }, () => {
        console.log('connected to db')
    })
}

module.exports = setUpDB