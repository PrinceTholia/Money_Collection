import cause from "../model/causeModal.js";
class causeController{
    async createCause(req,res){
        const {event,target,amountCollected}=req.body;
        const newCause=new cause({
            event,
            targetAmount:target,
            amountCollected,
        })

        const Cause=await newCause.save();
        res.json(Cause);
    }
    async getCause(req,res){
        const Cause=await cause.find({});
        res.json(Cause);
    }
}

export default new causeController();