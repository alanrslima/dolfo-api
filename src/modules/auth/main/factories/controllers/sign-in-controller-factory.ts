import { Controller } from "../../../../common";
import { SignInUseCase } from "../../../application/use-case/sign-in-use-case";
import { UserMemoryRepository } from "../../../infra/repository/memory/user-memory-repository";
import { SignInController } from "../../../presentation/controller/sign-in-controller";

export const signInControllerFactory = (): Controller => {
  const userMemoryRepository = new UserMemoryRepository();
  const signInUseCase = new SignInUseCase(userMemoryRepository);
  const controller = new SignInController(signInUseCase);
  return controller;
};
