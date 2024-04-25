import Donate from "../model/donateModal.js";
class donateController{
    async createDonation(req,res){
        const {user,amount}=req.body;
        const newDonation=new Donate({
            user,
            amount
        })
        const Donation=await newDonation.save();
        res.json(Donation);
    }
    async getDonation(req,res){
        const donation=await Donate.find({});
        res.json(donation);
    }
}

export default new donateController();