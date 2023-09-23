import mongoose from "mongoose";

export const RestOrderSchema = mongoose.Schema({
    productId:{ type:String,required:true },
    productName:{type:String,required:true },
    landmark:{ type: String,required:true },
    orderId: {type:String,required:true},
    amount:{type:String,required:true},
    quantity:{type:String,required:true},
    image:{type:String,required:true},
    restroId:{type:String,required:true}
});
const RestOrder= mongoose.model('RestOrder',RestOrderSchema);
export default RestOrder;