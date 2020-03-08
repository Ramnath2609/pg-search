const User = require('../models/User')

const authenticateUser = (req, res, next) => {
    const token = req.header('x-auth')
    User.findByToken(token)
        .then(user => {
            req.user = user
            req.token = token
            next()
        })
        .catch(err => {
            res.send(err)
        })
}

module.exports = authenticateUser