import { type Router } from "express";
import { adaptRoute } from "../../../common";
import { signInControllerFactory } from "../factories/controllers/sign-in-controller-factory";
import { signUpControllerFactory } from "../factories/controllers/sign-up-controller-factory";
import { auth } from "../middlewares";
import { getMeControllerFactory } from "../factories/controllers/ge-me-controller-factory";

const authRoutes = (router: Router): void => {
  router.post("/auth/sign-in", adaptRoute(signInControllerFactory()));
  router.post("/auth/sign-up", adaptRoute(signUpControllerFactory()));
  router.get("/auth/me", auth, adaptRoute(getMeControllerFactory()));
};

export { authRoutes };
