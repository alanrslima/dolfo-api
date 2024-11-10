import { Controller } from "../../../../common";
import { SignInUseCase } from "../../../application/use-case/sign-in-use-case";
import { UserMysqlRepository } from "../../../infra/repository/mysql/user-mysql-repository";
import { SignInController } from "../../../presentation/controller/sign-in-controller";

export const signInControllerFactory = (): Controller => {
  const userMysqlRepository = new UserMysqlRepository();
  const signInUseCase = new SignInUseCase(userMysqlRepository);
  const controller = new SignInController(signInUseCase);
  return controller;
};
