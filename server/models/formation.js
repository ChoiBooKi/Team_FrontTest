const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    circle: {
      type: Number,
    },
    x: {
      type: Number
    },
    y: {
      type: Number
    },
})

const formation = mongoose.model('formation', userSchema)

module.exports = { formation }