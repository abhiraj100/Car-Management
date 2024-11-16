import { deleteFromCloud, uploadToCloud } from "../lib/cloudinary.js"
import { carModel } from "../model/car.model.js"
import { ApiError } from "../utils/utility.js"

const getAllCars = async (req, res, next) => {
    try {
        const cars = await carModel.find({})
        return res.status(200).json({
            success: true,
            message: "All cars retrived",
            cars,
            totalCars: cars.length
        })
    } catch (err) {
        next(err)
    }
}

const createProduct = async (req, res, next) => {
    try {
        const { title, description, tags } = req.body
        const files = req.files
        if (!files)return next(new ApiError("Files not found", 400))
        const result = await uploadToCloud(files)
        const car = await carModel.create({ title, description, tags, images: result, userId: req._id })

        return res.status(201).json({
            success: true,
            message: "Create Product",
            car
        })
    } catch (err) {
        next(err)
    }
}
const deleteProduct = async (req, res, next) => {
    try {
        const { id } = req.params
        console.log(id)
        const car = await carModel.findById(id)
        if (!car) return next(new ApiError("Product not found", 404))

        if (car.userId.toString() !== req._id.toString()) {
            return next(new ApiError("Unauthorized to update this product", 403));
        }

        const result = await deleteFromCloud([...car?.images])
        console.log(result)
        await carModel.findByIdAndDelete(id)
        res.status(200).json({
            success: true,
            message: "Product deleted"
        })
    } catch (err) {
        next(err)
    }
}

const updateProduct = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { title, description, tags } = req.body
        
        const files = req.files;

        const car = await carModel.findById(id);
        if (!car) return next(new ApiError("Product not found", 404));


        if (car.userId.toString() !== req._id.toString()) {
            return next(new ApiError("Unauthorized to update this product", 403));
        }


        if (files && files.length > 0) {

            const oldImageDeletionResult = await deleteFromCloud(car.images);
            console.log("Old Images Deleted: ", oldImageDeletionResult);


            const uploadedImages = await uploadToCloud(files);
            car.images = uploadedImages;
        }


        if (title) car.title = title;
        if (description) car.description = description;
        if (tags) car.tags = tags.split(',').map(tag => tag.trim());

        const updatedCar = await car.save();


        res.status(200).json({
            success: true,
            message: "Car updated successfully",
            car: updatedCar
        });
    } catch (err) {
        return next(err.message);
    }
};


const searchProduct = async (req, res, next) => {
    try {
        const { q } = req.query; 

        if (!q) return next(new ApiError("Search query is required"))

        const cars = await carModel.find({
            $or: [
                { title: { $regex: q, $options: "i" } }, 
                { description: { $regex: q, $options: "i" } }, 
                { tags: { $regex: q, $options: "i" } } 
            ]
        })

        return res.status(200).json({
            success: true,
            results: cars.length,
            cars
        })
    } catch (err) {
        next(err); 
    }
};


export {
    getAllCars,
    updateProduct,
    deleteProduct,
    createProduct,
    searchProduct
}