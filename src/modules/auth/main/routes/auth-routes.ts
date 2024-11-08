import { type Router } from "express";
import { auth } from "../middlewares";
import { adaptRoute } from "../../../common";
import { signInControllerFactory } from "../factories/controllers/sign-in-controller-factory";
import { signUpControllerFactory } from "../factories/controllers/sign-up-controller-factory";

const authRoutes = (router: Router): void => {
  router.post("/auth/sign-in", adaptRoute(signInControllerFactory()));
  router.post("/auth/sign-up", adaptRoute(signUpControllerFactory()));
};

export { authRoutes };
