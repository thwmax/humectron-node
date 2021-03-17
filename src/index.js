const express = require('express')
const cors = require('cors')
require('./db/mongoose')
const temperaturesRouter = require('./routers/temperatures')

const app =  express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(temperaturesRouter)


app.listen(port, () =>  {
    console.log('Listenting on 3000')
})