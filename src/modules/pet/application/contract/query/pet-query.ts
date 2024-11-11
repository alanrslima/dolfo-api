import { PetListDTO } from "./dto/pet-dto";

export interface PetQuery {
  listPets(guardianId: string): Promise<PetListDTO[]>;
}
