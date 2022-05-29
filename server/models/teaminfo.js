const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    teamname: {
      type: String,
      maxlength: 50
    },
    intro: {
      type: String,
      maxlength: 50
    },
    leader: {
      type: String,
      maxlength: 50
    },
    date: {
      type: String,
      maxlength: 50
    },
    numofplayer: {
      type: Number
    },
    age: {
      type: String,
      maxlength: 50
    },
    region: {
      type: String,
      maxlength: 50
    },
})

const teaminfo = mongoose.model('teaminfo', userSchema)

module.exports = { teaminfo }