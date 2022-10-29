
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

app.post('/profile', async (req, res) => {

    const { name, genre, age, email, password, approved } = req.body
    
    
    if(!name){
        res.status(422).json({error: 'campo obrgatório'})
    }
    
    
    const  profile = {
        name,
        genre,
        age,
        email,
        password,
        approved
    }

    try {
        
    await Profile.create(profile)

    res.status(201).json('Perfil cadastro com sucesso!')
    
    } catch (error) {
        res.status(500).json({error})
    }
})


const USER_BD = 'leonardocavalcanti'
const BD_PASSWORD = encodeURIComponent('kleverson20')


mongoose.connect(`mongodb+srv://${USER_BD}:${BD_PASSWORD}@apicluster.1icwsn2.mongodb.net/?retryWrites=true&w=majority`)

.then(()=>{
    console.log("Conectado ao banco com sucesso!")
    app.listen(3000)
})

.catch((err)=> console.log(err))
