import { UseCase } from "../../../kernel/contact";
import { TPerson } from "../entities/person";
import { IPersonRepository } from "./ports/person.repository ";

export class GetAllPersonsInteractor implements UseCase<VoidFunction,TPerson[]>{
    constructor(private readonly repository: IPersonRepository){}
   async execute(payload?: VoidFunction | undefined): Promise<TPerson[]> {

        return await this.repository.findAll();

    }

}