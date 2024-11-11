import { Middleware } from "../../../../common";
import { UserMysqlRepository } from "../../../infra/repository/mysql/user-mysql-repository";
import { AuthMiddleware } from "../../../presentation/middlewares/auth-middleware";

export const authMiddlewareFactory = (role?: string): Middleware => {
  const userMysqlRepository = new UserMysqlRepository();
  return new AuthMiddleware(userMysqlRepository);
};
