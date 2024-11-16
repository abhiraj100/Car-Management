import jwt from 'jsonwebtoken'


export const options = {
    maxAge: 1000 * 24 * 60 * 60 * 2,
    secure: true,
    httpOnly: true,
}

class ApiError extends Error {
    constructor(message, code) {
        super(message)
        this.statusCode = code
    }
}

const sendToken = (res, code, user, message) => {
    const secret = process.env.JWT_SECRET
    const token = jwt.sign({ _id: user._id }, secret)
    res.cookie("token", token, options)
    return res.status(code).json({
        success: true,
        message,
        user
    })

}

export { ApiError, sendToken }