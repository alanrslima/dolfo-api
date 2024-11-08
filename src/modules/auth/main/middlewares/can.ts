import { adaptMiddleware } from "../../../common/adapters";
import { canMiddlewareFactory } from "../factories/middlewares/can-middleware-factory";

// export const can = (permissions: Array<keyof typeof availablePermissions>) =>
//   adaptMiddleware(canMiddlewareFactory(permissions));

export const can = (permissions: Array<string>) =>
  adaptMiddleware(canMiddlewareFactory(permissions));
