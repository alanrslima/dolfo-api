import { adaptMiddleware } from "../../../common/adapters";
import { authMiddlewareFactory } from "../../main/factories/middlewares/auth-middleware-factory";

export const adminAuth = adaptMiddleware(authMiddlewareFactory("admin"));
