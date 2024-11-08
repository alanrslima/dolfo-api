import { Pet } from "../../../domain/entity/pet";

export interface PetRepository {
  getById(id: string): Promise<Pet>;
  create(pet: Pet): Promise<void>;
  update(pet: Pet): Promise<void>;
}
