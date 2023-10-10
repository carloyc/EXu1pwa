//Dao | "Service Repositorio"

import { pool } from "../../../config/postgres";
import { TPerson } from "../entities/person";
import { IUserRepository } from "../use-cases/ports/person.repository";

export class PersonStorageGateway implements IPersonRepository {
    async findAll(): Promise<TPerson[]> {
        const query = "SELECT * FROM persons ORDER BY id DESC;"
        const {rows:userRows}=await pool.query(query);
        return userRows.map((person)=> <TPerson>person);
    }
    findById(id: number): Promise<TPerson> {
        throw new Error("Method not implemented.");
    }
    save(user: TPerson): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    update(user: TPerson): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    delete(id: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

}