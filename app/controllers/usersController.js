const User = require('../models/User')
const _ = require('lodash')

module.exports.register = (req, res) => {
    const body = req.body
    const user = new User(body)
    user.save()
        .then(user => {
            if(user){
                res.send(_.pick(user, ['_id', 'username', 'email']))
            }
        })
        .catch(err => {
            res.send(err)
        })
}


module.exports.login = (req, res) => {
    const { email, password } = req.body
    User.findByCredentials(email, password)
        .then(user => {
            return user.generateToken()
        })
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.send(err)
        })
}

module.exports.account = (req, res) => {
    const { user } = req
    res.send(_.pick(user, ['_id', 'username', 'email']))
}

module.exports.logout = (req, res) => {
    const { user, token } = req
    User.findOneAndUpdate({ _id : user._id }, { $pull : { tokens : { token : token }}})
            .then(user => {
                res.send({ notice : 'successfully logged out'})
            })
            .catch(err => {
                res.send(err)
            })
}