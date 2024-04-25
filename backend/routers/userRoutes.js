import userController from "../controllers/userController.js";
import { Router } from "express";
const router=Router();
router.post("/createUser",userController.createUser);


export default router;