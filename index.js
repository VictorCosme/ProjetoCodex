
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Profile = require('./models/Profile')


app.use(
    express.urlencoded({ 
        extend:true,
    })
)

app.use(express.json())

const profileRoutes = require('./routes/profileRoutes')

app.use('/profile', profileRoutes)



const USER_BD = 'leonardocavalcanti'
const BD_PASSWORD = encodeURIComponent('kleverson20')


mongoose.connect(`mongodb+srv://${USER_BD}:${BD_PASSWORD}@apicluster.1icwsn2.mongodb.net/?retryWrites=true&w=majority`)

.then(()=>{
    console.log("Conectado ao banco com sucesso!")
    app.listen(3000)
})

.catch((err)=> console.log(err))
