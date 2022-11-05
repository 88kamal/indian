import connectDb from "../../database/db";
import User from "../../model/User"
import bcrypt from 'bcrypt'

connectDb()

export default async function handler(req, res) {

    const { name, email, password } = req.body

    try {

        if (!name || !email || !password) {
            res.status(422).json({ error: "Please Fill All Fields" })
        }

        const user = await User.findOne({ email })

        if (user) {
            return res.status(422).json({ error: "User Already Exist" })
        }

        const hashPassword = await bcrypt.hash(password, 12);

        const newUser = await new User({
            name,
            email,
            password: hashPassword
        })
        await newUser.save()

        res.status(201).json({ message: "Signup Successfully" })
    } catch (error) {
        console.log(error)
    }




}
