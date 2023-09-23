import mongoose from "mongoose";

export const OrderSchema = mongoose.Schema({
    productId:{ type: mongoose.Schema.Types.ObjectId, ref: "Partner.products" },
    productName:{type: mongoose.Schema.Types.String, ref: "Partner.products" },
    landmark:{ type: mongoose.Schema.Types.String, ref: "Partner.products" },
    orderId: {type:String,require:true},
    amount:{type:String,required:true},
    quantity:{type:String,required:true},
    image:{type:String,required:true},
    restroId:{type:String,required:true}
});
const Order= mongoose.model('Order',OrderSchema);
export default Order;