const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    id: {
        type: Number
    },
    circle: {
      type: Number,
    },
    name: {
      type: String,
      maxlength: 50
    },
    x: {
      type: Number
    },
    y: {
      type: Number
    },
})

const Positions = mongoose.model('Positions', userSchema)

module.exports = { Positions }