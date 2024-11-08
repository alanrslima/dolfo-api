import { adaptMiddleware } from "../../../common";
import { authMiddlewareFactory } from "../factories/middlewares/auth-middleware-factory";

export const auth = adaptMiddleware(authMiddlewareFactory());
