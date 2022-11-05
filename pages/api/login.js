import connectDb from "../../database/db";
import User from "../../model/User"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
connectDb()

export default async function handler(req, res) {

    const { email, password } = req.body

    try {

        if (!email || !password) {
            res.status(422).json({ error: "Please Fill All Fields" })
        }

        const user = await User.findOne({ email })

        if (!user) {
            return res.status(422).json({ error: "User Not Found" })
        }

        const doMatch = await bcrypt.compare(password, user.password)

        if (doMatch) {
            const token = jwt.sign({ userId: user._Id }, process.env.JWT_SECRET, {
                expiresIn: "7d"
            })
            const {name,email}= user
            res.status(201).json({ token, user:{
                name,email
            }})
        }
        else {
            res.status(401).json({ error: "Email And Password Not Found" })

        }
        // res.status(201).json({ message: "Login Successfully" })
    } catch (error) {
        console.log(error)
    }




}
