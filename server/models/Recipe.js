import mongoose from 'mongoose'

const RecipeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    culture: {
        type: String,
        required: true
    },
    directions: {
        type: String,
        required: true
    },
    ingredients: {
        type: [String],
        required: true
    },
    file: {
        type: String,
    },
    creator: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

export default mongoose.model('Recipe', RecipeSchema, 'recipes')
