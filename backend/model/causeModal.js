import mongoose,{Schema} from "mongoose"

const Cause=new Schema({
    event:{type:String},
    targetAmount:{type:Number},
    amountCollected:{type:Number,default:0}
})

const cause = mongoose.model("cause",Cause);
export default cause;