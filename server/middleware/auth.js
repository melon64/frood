import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1]
        // const token = req.headers.authorization
        // console.log(token)
        
        let decodedData = jwt.verify(token, process.env.ACCESS_SECRET)

        req.userId = decodedData?.id
 
        next()
    } catch (err) {
        console.log(err)
    }
}

export default auth
