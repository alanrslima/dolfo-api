import { PetListDTO } from "./dto/pet-dto";

export interface PetQuery {
  listPets(): Promise<PetListDTO[]>;
}
