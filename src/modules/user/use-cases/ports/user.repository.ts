import { TUser } from "../../../../modules/user/entities/user";

export interface IUserRepository{
    findAll():Promise<TUser[]>;
    findById(id:number):Promise<TUser>;
    save(user: TUser):Promise<boolean>;
    update(user: TUser):Promise<boolean>;
    delete(id:number):Promise<boolean>

}
export interface IUserRepository{
    findAll():Promise<TUser[]>;
    findById(id:number):Promise<TUser>;
    save(user: TUser):Promise<boolean>;
    update(user: TUser):Promise<boolean>;
    delete(id:number):Promise<boolean>

}