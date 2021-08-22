import express from 'express'
import mongoose from 'mongoose'

import Recipe from '../models/Recipe.js'
// import Filter from '../filters/recipes.filter.js'

const router = express.Router()

export const getRecipes = async (req, res) => { 
    try {
        let Recipes = await Recipe.find()

        res.status(200).json(Recipes)
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}

export const getRecipe = async (req, res) => { 
    try {
        const post = await Recipe.findById((req.params.id))

        res.status(200).json(post)
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}

export const createRecipe = async (req, res) => {
    const recipe = req.body

    const newRecipe = new Recipe({ ...recipe })

    try {
        await newRecipe.save()

        res.status(201).json(newRecipe)
    } catch (err) {
        res.status(409).json({ message: err.message })
    }
}

export const updateRecipe = async (req, res) => {
    const id = req.params.id
    const { name, description, culture, directions, ingredients, file } = req.body
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`Recipe with id: ${id} doesn't exist`)

    const updatedPost = { name, description, culture, directions, ingredients, file, _id: id }

    await Recipe.findByIdAndUpdate(id, updatedPost, { new: true })

    res.json(updatedPost)
}

export const deleteRecipe = async (req, res) => {
    const id = req.params.id

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`Recipe with id: ${id} doesn't exist`)

    await Recipe.findByIdAndRemove(id)

    res.json({ message: "Recipe removed." })
}

export default router
