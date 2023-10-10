import { TPerson } from "../../../user/entities/person";

export interface IPersonRepository{
    findAll():Promise<TPerson[]>;
    findById(id:number):Promise<TPerson>;
    save(user: TPerson):Promise<boolean>;
    update(user: TPerson):Promise<boolean>;
    delete(id:number):Promise<boolean>

}
export interface IPersonRepository{
    findAll():Promise<TPerson[]>;
    findById(id:number):Promise<TPerson>;
    save(user: TPerson):Promise<boolean>;
    update(user: TPerson):Promise<boolean>;
    delete(id:number):Promise<boolean>

}