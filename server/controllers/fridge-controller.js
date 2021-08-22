import express from 'express'
import Ingredient from '../models/Fridge.js'

const router = express.Router()

export const getIngredients = async (req, res) => { 
    try {
        let Ingredients = await Ingredient.find()

        res.status(200).json(Ingredients)
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}

export const getIngredient = async (req, res) => { 
    try {
        const post = await Ingredient.findById(req.params.id)
        
        res.status(200).json(post)
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}

export const addIngredients = async (req, res) => {
    const ingredients = req.body.ingredients

    const newIngredient = new Ingredient({ingredients})

    try {
        await newIngredient.save()

        const id = newIngredient.id
        res.redirect('/fridge/'+id)
        // res.status(201).json(newIngredient)
        
    } catch (err) {
        res.status(409).json({ message: err.message })
    }
}

export default router
