const express = require('express')
const cors = require('cors')
require('./db/mongoose')
const temperatureRouter = require('./routers/temperature')
const moistureRouter = require('./routers/moisture')
const userRouter = require('./routers/user')

const app =  express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(temperatureRouter)
app.use(userRouter)
app.use(moistureRouter)


app.listen(port, () =>  {
    console.log('Listenting on 3000')
})