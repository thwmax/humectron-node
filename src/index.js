const express = require('express')
const cors = require('cors')
require('./db/mongoose')
const TemperatureData = require('./models/temperature')

const app =  express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/temperatures', (req, res)  => {
    TemperatureData.find({}).then((values) =>  {
        res.send({"data": values})
    }).catch((e) => {
        res.status(503).send(e)
    })
})

app.post('/temperatures', (req, res) => {
    const temperatureData = new TemperatureData(req.body)
    temperatureData.save().then(() => {
        res.status(201).send(temperatureData)
    }).catch((e) => {
        res.status(400).send(e)
    })
})

app.listen(port, () =>  {
    console.log('Listenting on 3000')
})