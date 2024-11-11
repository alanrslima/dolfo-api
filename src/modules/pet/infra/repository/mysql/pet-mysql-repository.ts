import mysqlDatabase from "../../../../common/infra/mysql/mysql-database";
import { PetRepository } from "../../../application/contract/repository/pet-repository";
import { Pet } from "../../../domain/entity/pet";

export class PetMsqlRepository implements PetRepository {
  private data: Pet[];

  constructor(mock?: Pet[]) {
    this.data = mock || [];
  }

  async create(pet: Pet): Promise<void> {
    const sql = `INSERT INTO pet (id, name, specie, breed, birthday, guardian_id) VALUES (?,?,?,?,?,?)`;

    await mysqlDatabase.query({
      sql,
      values: [
        pet.getId(),
        pet.getName(),
        pet.getSpecie(),
        pet.getBreed(),
        pet.getBirthday(),
        pet.getGuardianId(),
      ],
    });
  }

  getData() {
    return this.data;
  }
}
