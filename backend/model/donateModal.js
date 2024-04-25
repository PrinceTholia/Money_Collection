import mongoose,{Schema} from "mongoose";

const Donate=new Schema({
    user:{type:String},
    amount:{type:Number}
})

const donate=mongoose.model("Donate",Donate);
export default donate;