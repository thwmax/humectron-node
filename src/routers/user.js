const express = require('express')
const User = require('../models/user')

const router = new express.Router()

router.post('/users/signup', async (req, res)  => {
    const user = new User(req.body)
    try {
        await user.save()
        res.send({ user })
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/users/login', async (req, res)  => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        res.send({ user, token })
    } catch (e) {
        res.status(400).send(e)
    }
})

module.exports = router