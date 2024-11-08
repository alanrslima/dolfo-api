import { PetRepository } from "../../../application/contract/repository/pet-repository";
import { Pet } from "../../../domain/entity/pet";
import { PetNotFoundError } from "../../../error/pet-not-found-error";

export class PetMemoryRepository implements PetRepository {
  private data: Pet[];

  constructor(mock?: Pet[]) {
    this.data = mock || [];
  }

  async create(pet: Pet): Promise<void> {
    this.data.push(pet);
  }

  async getById(id: string): Promise<Pet> {
    const pet = this.data.find((pet) => pet.getId() === id);
    if (!pet) throw new PetNotFoundError();
    return pet;
  }

  async update(pet: Pet): Promise<void> {
    this.data = this.data.map((item) =>
      item.getId() === pet.getId() ? pet : item
    );
  }

  getData() {
    return this.data;
  }
}
