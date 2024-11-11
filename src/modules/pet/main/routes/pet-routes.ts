import { type Router } from "express";
import { listMyPetsControllerFactory } from "../factories/controllers/list-my-pets-controller-factory";
import { adaptRoute } from "../../../common";
import { auth } from "../../../auth";
import { addPetControllerFactory } from "../factories/controllers/add-pet-controller-factory";

const petRoutes = (router: Router): void => {
  router.get("/pet", auth, adaptRoute(listMyPetsControllerFactory()));
  router.post("/pet", auth, adaptRoute(addPetControllerFactory()));
};

export { petRoutes };
