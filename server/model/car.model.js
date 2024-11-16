import mongoose, { Types } from "mongoose";


const carSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title can't be empty"]
    },
    description: {
        type: String,
        required: [true, "Description can't be empty"]
    },
    tags: [{
        type: String,
        required: [true, "Tags can't be empty"]
    }],
    images: [{ 
        public_id: String,
        url: String
    }],
    userId: {
        type: Types.ObjectId,
        ref: "user",
        required: true 
    }
});


export const carModel = mongoose.models.car || mongoose.model('car', carSchema);
