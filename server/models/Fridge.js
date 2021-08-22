import mongoose from 'mongoose'

const FridgeSchema = mongoose.Schema({
    ingredients: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

export default mongoose.model('Ingredient', FridgeSchema, 'fridges')
