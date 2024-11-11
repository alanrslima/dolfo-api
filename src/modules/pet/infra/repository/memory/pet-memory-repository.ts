import { PetRepository } from "../../../application/contract/repository/pet-repository";
import { Pet } from "../../../domain/entity/pet";

export class PetMemoryRepository implements PetRepository {
  private data: Pet[];

  constructor(mock?: Pet[]) {
    this.data = mock || [];
  }

  async create(pet: Pet): Promise<void> {
    this.data.push(pet);
  }

  getData() {
    return this.data;
  }
}
