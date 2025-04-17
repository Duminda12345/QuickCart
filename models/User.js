import mongoose, { Types } from "mongoose";


const userSchema = new mongoose.Schema({
    _id:{ Type : String, required:true},
    name: { Type : String, required:true},
    email: { Type : String, required:true, unique:true},
    imageUrl: { Type : String, required:true},
    cartItems: { Type : Object, default: {}},
},{minimize: false })

const User = mongoose.models.user || mongoose.model('user',userSchema)

export default User