import { Controller } from "../../../../common";
import { CreatePetUseCase } from "../../../application/use-case/create-pet-use-case";
import { PetMemoryRepository } from "../../../infra/repository/memory/pet-memory-repository";
import { CreatePetController } from "../../../presentation/controller/pet/create-pet-controller";

export const createPetControllerFactory = (): Controller => {
  const petMemoryRepository = new PetMemoryRepository();
  const setupMfaUseCase = new CreatePetUseCase(petMemoryRepository);
  const controller = new CreatePetController(setupMfaUseCase);
  return controller;
};
