import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import mongodb from 'mongodb'

import userRoute from './routes/users.js'
import recipeRoute from './routes/recipes.js'
import fridgeRoute from './routes/fridge.js'

// import RecipeFilter from './filters/recipes.filter.js'

import dotenv from 'dotenv'
dotenv.config()

const app = express()

app.use(express.json({ limit: '30mb', extended: true}))
app.use(express.urlencoded({ limit: '30mb', extended: true}))
app.use(cors())

app.use('/user', userRoute)
app.use('/recipe', recipeRoute)
app.use('/fridge', fridgeRoute)

const dbURI = process.env.DB_CONNECTION
const port = process.env.PORT || 5000
const MongoClient = mongodb.MongoClient

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(port, () => console.log(`Server Running on Port: http://localhost:${port}`)))
    .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false)
