const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
      type: String,
      maxlength: 50
    },
    gender: {
      type: String,
      maxlength: 50
    },
    email: {
      type: String,
      maxlength: 50
    },
    nickName: {
      type: String,
      maxlength: 50
    },
    region: {
      type: String,
      maxlength: 50
    },
    like: {
      type: String,
      maxlength: 50
    },
    player: {
      type: Boolean
    },
    info: {
      type: String,
      maxlength: 50
    }
})

const Info = mongoose.model('Info', userSchema)

module.exports = { Info }