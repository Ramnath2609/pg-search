const Review = require('../models/Review')


module.exports.list = (req, res) => {
    const id = req.params.id
    Review.find({ property : id }).populate('user', ['_id', 'username'])
        .then(reviews => {
            res.esnd(reviews)
        })
        .catch(err => {
            res.send(err)
        })
}


module.exports.update = (req, res) => {
    const id = req.params.id
    const { user, body } = req
    Review.findOneAndUpdate({ _id : id, user : user._id }, body, { new : true } )
        .then(review => {
            res.send(review)
        })
        .catch(err => {
            res.send(err)
        })
}

module.exports.destroy = (req, res) => {
    const id = req.params.id
    Review.findOneAndDelete({ _id : id })
        .then(review => {
            res.send(review)
        })
        .catch(err => {
            res.send(err)
        })
}