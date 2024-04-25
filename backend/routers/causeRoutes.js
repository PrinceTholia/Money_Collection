import causeController from "../controllers/causeController.js";
import { Router } from "express";
const router = Router();
router.post("/createCause",causeController.createCause);
router.get("/getCause",causeController.getCause);

export default router;