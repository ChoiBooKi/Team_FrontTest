const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    id: {
        type: Number
    },
    name: {
      type: String,
      maxlength: 50
    },
    already: {
      type: Boolean
    },
    Change: {
      type: Boolean
    },
})

const SoccerUser = mongoose.model('SoccerUser', userSchema)

module.exports = { SoccerUser }