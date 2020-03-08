

const authoriseUser = (req, res, next) => {
    const  { user } = req
    if(user.role == 'owner'){
        next()
    }else{
        res.send({ notice : 'forbidden'})
    }
}

module.exports = authoriseUser