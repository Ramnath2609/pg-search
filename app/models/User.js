const mongoose = require('mongoose')
const Schema = mongoose.Schema
const validator = require('validator')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userSchema = new Schema ({
    username : {
        type : String,
        required : true,
        minlength : 5
    },
    email : {
        type : String,
        unique : true,
        required : true,
        validate : {
            validator : function(value){
                return validator.isEmail(value)
            },
            message : function(){
                return 'please enter a valid email'
            }
        }
    },
    mobile : {
        type : String,
        required : true,
        minlength : 10,
        maxlength : 10
    },
    password : {
        type : String,
        required : true,
        minlength : 6
    },
    createdAt : {
        type : Date,
        default : new Date()
    },
    role : {
        type : String
    },
    tokens : [
        {
            token : {
                type : String
            },
            createdAt : {
                type : Date,
                default : new Date()
            }
        }
    ],
    isOwner : {
        type : Boolean,
        default : false
    }
})


//pre hooks - hashing password
userSchema.pre('save', function(next){
    const user = this
    if(user.isNew){
        bcryptjs.genSalt(10)
            .then(salt => {
                bcryptjs.hash(user.password, salt)
                    .then(encrypted => {
                        console.log(encrypted)
                        user.password = encrypted
                        if(user.isOwner){
                            user.role = 'owner'
                        }
                        next()
                    })
            })
    }else{
        next()
    }
})

userSchema.statics.findByToken = function(token){
    const User = this
    let tokenData
    try{
        tokenData = jwt.verify(token, 'jwt@123')
    }catch(err){
        return Promise.reject(err)
    }
    return User.findOne({ _id : tokenData._id, 'tokens.token' : token })
                .then(user => {
                    return Promise.resolve(user)
                })
                .catch(err => {
                    return Promise.reject(err)
                })
}

userSchema.statics.findByCredentials = function(email, password){
    const User = this
    return User.findOne({ email })
                .then(user => {
                    if(!user){
                        return Promise.reject('invalid email or password')
                    }
                    return bcryptjs.compare(password, user.password)
                                .then(value => {
                                    if(value){
                                        return Promise.resolve(user)
                                    }else{
                                        return Promise.reject('invalid email or password')
                                    }
                                })
                })
}

userSchema.methods.generateToken = function(){
    console.log('within token generate')
    const user = this
    const tokenData = {
        _id : user._id,
        username : user.username,
        role : user.role,
        createdAt : Number(new Date())
    }
    const token = jwt.sign(tokenData, 'jwt@123')
    user.tokens.push({ token })
    return user.save()
                .then(user => {
                    if(user){
                        return Promise.resolve({ user, token })
                    }
                })
                .catch(err => {
                    return Promise.reject(err)
                })
}

const User = mongoose.model("User", userSchema)

module.exports = User