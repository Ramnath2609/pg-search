const Property = require('../models/Property')

module.exports.create = (req, res) => {
    const { user } = req
    const body = req.body
    const property = new Property(body)
    property.owner = user._id
    property.save()
        .then(property => {
            res.send(property)
        })
        .catch(err => {
            res.send(err)
        })
}

module.exports.list = (req, res) => {
    const { user } = req
    Property.find({ owner : user._id })
        .then(properties => {
            if(properties){
                res.send(properties)
            }
        })
        .catch(err => {
            res.send(err)
        })
}


module.exports.show = (req, res) => {
    const { user } = req
    const id = req.params.id
    Property.findOne({ _id : id, owner : user._id })
        .then(property => {
            res.send(property)
        })
        .catch(err => {
            res.send(err)
        })
}


module.exports.update = (req, res) => {
    const { user, body } = req
    const id = req.params.id
    Property.findOneAndUpdate({ _id : id, owner : user._id }, body, { new : true, runValidators : true })
        .then(property => {
            res.send(property)
        })
        .catch(err => {
            res.send(err)
        })
}

module.exports.destroy = (req, res) => {
    const id = req.params.id
    const { user } = req
    Property.findOneAndDelete({ _id : id, owner : user._id })
        .then(property => {
            res.send(property)
        })
        .catch(err => {
            res.send(err)
        })
}