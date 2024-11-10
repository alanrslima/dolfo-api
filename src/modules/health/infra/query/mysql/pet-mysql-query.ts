import { PetListDTO } from "../../../application/contract/query/dto/pet-dto";
import { PetQuery } from "../../../application/contract/query/pet-query";

export class PetMysqlQuery implements PetQuery {
  async listPets(): Promise<PetListDTO[]> {
    return [];
  }
}
