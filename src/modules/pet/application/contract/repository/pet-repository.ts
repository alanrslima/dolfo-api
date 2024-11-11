import { Pet } from "../../../domain/entity/pet";

export interface PetRepository {
  create(pet: Pet): Promise<void>;
}
