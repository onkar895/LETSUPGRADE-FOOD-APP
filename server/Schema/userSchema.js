import mongoose from "mongoose";


export const userschema = mongoose.Schema({

           name:{
            type:String,
            required:true,
            min:2
           },
           email:{
            type:String,
            required:'true',
            unique:true
           },
           password:{
            type:String,
            required:true,
            min:5
            
           },
           role:{
            type:String,
            default:'user'
           },
           cart:{type:Array,ref:"Partner"},
           order:{type:Array,ref:"Order"}

})
  const User = mongoose.model("User", userschema)
export default User;

