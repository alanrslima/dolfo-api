import { Controller } from "../../../../common";
import { AddPetController } from "../../../presentation/controllers/add-pet-controller";
import { AddPetUseCase } from "../../../application/use-case/add-pet-use-case";
import { PetMsqlRepository } from "../../../infra/repository/mysql/pet-mysql-repository";

export const addPetControllerFactory = (): Controller => {
  const petMsqlRepository = new PetMsqlRepository();
  const addPetUseCase = new AddPetUseCase(petMsqlRepository);
  const controller = new AddPetController(addPetUseCase);
  return controller;
};
