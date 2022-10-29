const mongoose = require('mongoose')

const Person = mongoose.model('Person', {

    name: String,
    genre: String,
    age: Number,
    email: String,
    password: String,
    approved: Boolean

})

module.exports = Person
