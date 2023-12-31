import bodyParser from "body-parser";
import cors from "cors";
import express, { Application } from "express";
import { userRouter } from "../modules/user/adapters/user.controller"; 
import { defaults } from "pg";

const app:Application = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(
    cors({
        origin:"*"
    })
);
app.use(express.json({limit: "50mb"}));

//App-Routes
app.use("/api/user",userRouter);
export default app;