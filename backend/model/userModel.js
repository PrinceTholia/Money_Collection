import mongoose,{Schema} from "mongoose"
const userSchema=new Schema({
    name:{type:String},
    password:{type:String}
})

const User=mongoose.model("User",userSchema);
export default User;