const express = require('express')
const Temperature = require('../models/temperature')

const router = new express.Router()

router.get('/temperatures', async (req, res)  => {
    try {
        const data = await Temperature.find({})
        res.send({"data": data})
    } catch (e) {
        res.status(503).send(e)
    }
})

router.post('/temperatures', async (req, res) => {
    const allowedFields =  ['value', 'unit', 'source']
    const requestFields = Object.keys(req.body)
    const isValidOperation = requestFields.every((field) => allowedFields.includes(field))
    if (!isValidOperation) {
        return res.status(400).send({ error: "Invalid parameters"})
    }
    
    const temperature = new Temperature(req.body)
    try {
        await temperature.save()
        res.status(201).send(temperature)
    } catch (e) {
        console.log(e)
        res.status(400).send(e)
    }
})

module.exports = router