require('dotenv').config()
const express = require("express")
const app =express()
const mongoose = require("mongoose")
const routes = require('./src/routes')
const cors = require('cors')

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes)

mongoose.connect(process.env.DATABASE_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const db = mongoose.connection

db.on('error', (error)=> console.log(error))
db.once('open', ()=> console.log("database connected success "))


app.listen(process.env.PORT,() =>{
    console.log(`api is running at ${process.env.PORT}`)
})
