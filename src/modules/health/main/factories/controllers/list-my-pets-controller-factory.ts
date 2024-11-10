import { ListMyPetsController } from "../../../presentation/controllers/list-my-pets-controller";
import { PetMysqlQuery } from "../../../infra/query/mysql/pet-mysql-query";
import { Controller } from "../../../../common";

export const listMyPetsControllerFactory = (): Controller => {
  const petMysqlQuery = new PetMysqlQuery();
  const controller = new ListMyPetsController(petMysqlQuery);
  return controller;
};
