// import dotenv from 'dotenv'
// dotenv.config()

// let recipes

// export default class RecipeFilter {
//     static async injectDB (conn) {
//         if (recipes) {
//             return
//         }
//         try {
//             recipes = await conn.db(process.env.DB_NS).collection('recipes')
//         } catch (err) {
//             console.log(err)
//         }
//     }

//     static async filterRecipes ({ filters = null, page = 0, perPage = 20 } = {}) {
//         let query
//         if (filters) {
//             if ('culture' in filters) {
//                 query = { 'culture': { $eq: filters['culture'] } }
//             }
//         }

//         let cursor
//         try {
//             cursor = await recipes.find(query)
//         } catch (err) {
//             console.error(`Unable to issue find command, ${err}`)
//             return { recipeList: [], recipeCount: 0 }
//         }

//         const displayCursor = cursor.limit(perPage).skip(perPage * page)

//         try {
//             const recipeList = await displayCursor.toArray()
//             const recipeCount = await recipes.countDocuments(query)

//             return { recipeList, recipeCount }
//         } catch (err) {
//             console.error(`Unable to convert cursor to array or problem counting documents, ${err}`)
//             return { recipeList: [], recipeCount: 0 }
//         }
//     }
// }