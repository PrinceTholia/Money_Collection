import "dotenv/config.js"
import express from "express"
import DbConnect from "./service/dbService.js";

import userRoutes from "./routers/userRoutes.js";
import causeRoutes from "./routers/causeRoutes.js";
import donateRoutes from "./routers/donateRoutes.js";
import registerRoutes from "./routers/registerRoutes.js" 
import cors from "cors";

const app=express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}))
DbConnect();

// Middleware for handling preflight requests
app.options('*', cors());

app.use("/",userRoutes);
app.use("/",causeRoutes);
app.use("/",donateRoutes);
app.use("/",registerRoutes);

const PORT=process.env.PORT||3001;

app.listen(PORT,()=>{
    console.log(`app listening on port ${PORT}`)
});
