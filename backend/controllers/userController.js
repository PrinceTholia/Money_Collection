import User from "../model/userModel.js";
class userController{
    async createUser(req,res){
        const {name,password}=req.body;
        const user=new User({
            name,
            password
        })
        const newUser=await user.save();
        res.sendStatus(200);
    }
}
export default new userController();