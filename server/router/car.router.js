import express from 'express';
import { protectRoute } from '../middleware/auth.js';
import { getAllCars ,createProduct,updateProduct,deleteProduct, searchProduct} from '../controller/car.controller.js';
import { upload } from '../middleware/multer.js';
export const carRouter=express.Router();

carRouter
.route('/')
.get(getAllCars)
.post(protectRoute,upload.array("car",10),createProduct)


carRouter.use(protectRoute)

carRouter
.route('/:id')
.patch(upload.array("car",10),updateProduct)
.delete(deleteProduct)

carRouter
.route('/search')
.get(searchProduct)





