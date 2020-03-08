const Amenity = require('../models/Amenity')


module.exports.list = (req, res) => {
    
    Amenity.find({ })
}