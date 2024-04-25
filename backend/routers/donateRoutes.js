import { Router } from "express";
import donateController from "../controllers/donateController.js";
const router=Router();

router.post("/createDonation",donateController.createDonation);
router.get("/getDonation",donateController.getDonation);

export default router;