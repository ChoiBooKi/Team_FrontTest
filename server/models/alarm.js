const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    from: {
      type: String,
      maxlength: 50
    },
    name: {
      type: String,
      maxlength: 50
    },
    teamname: {
      type: String,
      maxlength: 50
    },
})

const alarm = mongoose.model('alarm', userSchema)

module.exports = { alarm }