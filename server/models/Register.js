const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    like: {
      type: String,
      maxlength: 50
    },
    name: {
      type: String,
      maxlength: 50
    },
    region: {
      type: String,
      maxlength: 50
    },
})

const Register = mongoose.model('Register', userSchema)

module.exports = { Register }