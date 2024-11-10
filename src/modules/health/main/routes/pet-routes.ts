import { type Router } from "express";
import { listMyPetsControllerFactory } from "../factories/controllers/list-my-pets-controller-factory";
import { adaptRoute } from "../../../common";

const authRoutes = (router: Router): void => {
  router.get("/pet/list", adaptRoute(listMyPetsControllerFactory()));
};

export { authRoutes };
