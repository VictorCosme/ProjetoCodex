const mongoose = require('mongoose')

const Profile = mongoose.model('Profile', {

    name:{type:String,required:true},
    genre:{type:String,required:true},
    yearsOld:{type:String,required:true},
    email:{type:String,required:true}, 
    password:{type:String,required:true},
    approved: Boolean

})

module.exports = Profile
