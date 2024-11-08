import { Middleware } from "../../../../common";
import { UserMemoryRepository } from "../../../infra/repository/memory/user-memory-repository";
import { AuthMiddleware } from "../../../presentation/middlewares/auth-middleware";

export const authMiddlewareFactory = (role?: string): Middleware => {
  const userMemoryRepository = new UserMemoryRepository();
  return new AuthMiddleware(userMemoryRepository);
};
