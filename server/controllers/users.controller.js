import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import User from '../models/User.js'

import dotenv from 'dotenv'
dotenv.config()

export const signin = async (req, res) => {
    const { email, password } = req.body 

    try {
        const existingUser = await User.findOne({ email })
        if (!existingUser) return res.status(404).json({ message: "User doesn't exist" })
        
        const passwordCheck = await bcrypt.compare(password, existingUser.password)
        if (!passwordCheck) return res.status(400).json({ message: "Invalid attempt"})

        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, process.env.ACCESS_SECRET, { expiresIn: "7d"})

        res.status(200).json({ result: existingUser, token })
    } catch (err) {
        res.status(500).json({ message: "Something went wrong"})
    }
}

// export const signup = async (req, res) => {
//     const { email, password, firstName, lastName } = req.body

//     try {
//         const existingUser = await User.findOne({ email })
//         if (existingUser) return res.status(400).json({ message: "User already exists" })

//         const hashedPassword = await bcrypt.hash(password, 12)

//         const result = await User.create({ email, password: hashedPassword, name: `${firstName} ${lastName}` })

//         const token = jwt.sign({ email: result.email, id: result._id }, process.env.ACCESS_SECRET, { expiresIn: "7d"})

//         result.token = token

//         res.status(200).json({ result, token })
//     } catch (err) {
//         console.log(err)
//         res.status(500).json({ message: "Something went wrong"})
//     }
// }
export const signup = async (req, res) => {
    const { email, password, firstName, lastName } = req.body

    try {
        const existingUser = await User.findOne({ email })
        if (existingUser) return res.status(400).json({ message: "User already exists" })

        const hashedPassword = await bcrypt.hash(password, 12)

        const result = await User.create({ email, password: hashedPassword, name: `${firstName} ${lastName}` })

        const token = jwt.sign({ email: result.email, id: result._id }, process.env.ACCESS_SECRET, { expiresIn: "7d"})

        result.token = token

        res.status(200).json({ result, token })
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
}