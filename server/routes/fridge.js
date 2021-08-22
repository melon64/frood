import express from 'express'
import { getIngredients, getIngredient, addIngredients } from '../controllers/fridge-controller.js'

const router = express.Router()

router.get('/', getIngredients)
router.get('/:id', getIngredient)
router.post('/', addIngredients)

export default router