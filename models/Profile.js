const mongoose = require('mongoose')

const Profile = mongoose.model('Profile', {

    name: String,
    genre: String,
    age: Number,
    email: String,
    password: String,
    approved: Boolean

})

module.exports = Profile
