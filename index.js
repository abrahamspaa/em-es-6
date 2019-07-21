import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

const app = express()
const PORT = 3000

const dbUrl = 'mongodb://localhost:27017/';
const dbName = 'em-es6';

mongoose.Promise = global.Promise;
mongoose.connect(dbUrl + dbName, { useNewUrlParser: true })

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

app.listen(PORT, () => {
    console.log(`Server is up and running on ${PORT}`)
})
