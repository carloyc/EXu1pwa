import express, { Request, Response } from "express";
import { PersonStorageGateway } from "./person.storage.gateway";
import { GetAllPersonsInteractor } from "../use-cases/get-all-persons.interactor";

export class PersonController{
    static async getAll(req: Request,res:Response){
        try{
            const repository = new PersonStorageGateway();
            const interactor = new GetAllPersonsInteractor(repository);
            const data = await interactor.execute();
            res.status(200).json(data); 

        }catch(error){
            console.log(error)
            res.status(400).json({message:"error"}); 
        }
    }
}
export const userRouter = express.Router();
userRouter.get("/",[],PersonController.getAll)
