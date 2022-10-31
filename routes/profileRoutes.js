const router = require('express').Router()
const Profile = require('../models/Profile')



router.post('/', async (req, res) => {

    const { name, genre, age, email, password, approved } = req.body
    
    
    if(!name){
        res.status(422).json({error: 'campo obrgatório'})
    }

     if(!genre){
        res.status(422).json({error: 'campo obrgatório'})

    }

     if(!age){
        res.status(422).json({error: 'campo obrgatório'})

    }

     if(!email){
        res.status(422).json({error: 'campo obrgatório'})

    }
    
     if(!password){
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

module.exports = router