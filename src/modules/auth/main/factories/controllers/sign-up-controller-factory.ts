import { Controller } from "../../../../common";
import { SignUpUseCase } from "../../../application/use-case/sign-up-use-case";
import { UserMysqlRepository } from "../../../infra/repository/mysql/user-mysql-repository";
import { SignUpController } from "../../../presentation/controller/sign-up-controller";

export const signUpControllerFactory = (): Controller => {
  const userMysqlRepository = new UserMysqlRepository();
  const signUpUseCase = new SignUpUseCase(userMysqlRepository);
  const controller = new SignUpController(signUpUseCase);
  return controller;
};
