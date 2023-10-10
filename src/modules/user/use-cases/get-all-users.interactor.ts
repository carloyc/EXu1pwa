import { UseCase } from "../../../kernel/contact";
import { TUser } from "../entities/user";
import { IUserRepository } from "./ports/user.repository";

export class GetAllUsersInteractor implements UseCase<VoidFunction,TUser[]>{
    constructor(private readonly repository: IUserRepository){}
   async execute(payload?: VoidFunction | undefined): Promise<TUser[]> {

        return await this.repository.findAll();

    }

}