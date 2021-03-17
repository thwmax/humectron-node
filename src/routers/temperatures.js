const express = require('express')
const TemperatureData = require('../models/temperature')

const router = new express.Router()

router.get('/temperatures', async (req, res)  => {
    try {
        const data = await TemperatureData.find({})
        res.send({"data": data})
    } catch (e) {
        res.status(503).send(e)
    }
})

router.post('/temperatures', async (req, res) => {
    const allowedFields =  ['value', 'unit', 'timestamp', 'source']
    const requestFields = Object.keys(req.body)
    const isValidOperation = requestFields.every((field) => allowedFields.includes(field))
    if (!isValidOperation) {
        return res.status(400).send({ error: "Invalid parameters"})
    }
    
    const temperatureData = new TemperatureData(req.body)
    try {
        await temperatureData.save()
        res.status(201).send(temperatureData)
    } catch (e) {
        res.status(400).send(e)
    }
})

module.exports = router