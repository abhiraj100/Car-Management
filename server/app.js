import express from 'express';
import dotenv from 'dotenv'
dotenv.config()
import cookieParser from 'cookie-parser';
import { v2 as cloudinary } from 'cloudinary'
import cors from 'cors';
import { corsOption } from './constants/config.js';
import { authRouter } from './router/auth.router.js';
import { handleApiError } from './utils/error.js';
import { userRouter } from './router/user.router.js';
import { carRouter } from './router/car.router.js';
import { dbConnect } from './utils/connection.js';


const app = express();
const port = process.env.PORT || 4000

dbConnect()

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_SECRET_KEY
})

app.use(cookieParser())
app.use(express.json())
app.use(cors(corsOption))

app.use('/api/auth', authRouter)
app.use('/api/user', userRouter)
app.use('/api/car', carRouter)

app.use(handleApiError)

app.listen(port, () => {
    console.log(`server is running on ${port}...`)
})
