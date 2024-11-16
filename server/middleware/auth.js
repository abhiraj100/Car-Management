import jwt from "jsonwebtoken"
import { userModel } from "../model/user.model.js"

const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.token
        if (!token) {
            return res.status(401).json({
                success: false,
                message: "user not logged in"
            })
        }
        const secret = process.env.JWT_SECRET
        const payload = jwt.verify(token, secret)
        console.log(payload)
        req._id=payload._id
        if (!payload) {
            return res.status(401).json({
                success: false,
                message: "authorization failed"
            })
        }
        next()
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

export {protectRoute}