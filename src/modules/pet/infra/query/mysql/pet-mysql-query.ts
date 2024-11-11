import mysqlDatabase from "../../../../common/infra/mysql/mysql-database";
import { PetListDTO } from "../../../application/contract/query/dto/pet-dto";
import { PetQuery } from "../../../application/contract/query/pet-query";

export class PetMysqlQuery implements PetQuery {
  async listPets(guardianId: string): Promise<PetListDTO[]> {
    const sql =
      "SELECT id, name, specie, breed, birthday FROM pet WHERE guardian_id = ?";
    return await mysqlDatabase.query({ sql, values: [guardianId] });
  }
}
