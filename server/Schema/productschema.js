import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3, // Use "minlength" for minimum string length
    },
    quantity: {
        type: Number,
        required: true,
        min: 1,
    },
    price: {
        type: Number,
        required: true,
        min: 1,
    },
    description: {
        type: String,
        required: true,
        minlength: 5, // Use "minlength" for minimum string length
    },
    image: {
        type: String,
        required: true,
        minlength: 1, // Use "minlength" for minimum string length
    },
    adminID:{ type:mongoose.Schema.Types.ObjectId, required:true, ref:"Partner"}
});

const Product = mongoose.model('Product', ProductSchema);
export default Product;
