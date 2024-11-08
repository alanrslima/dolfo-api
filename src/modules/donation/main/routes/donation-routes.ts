import { type Router } from "express";
import { createPetControllerFactory } from "../factories/controllers/create-pet-controller-factory";
import { adaptRoute } from "../../../common";
import { auth } from "../../../auth";

const donationRoutes = (router: Router): void => {
  router.post("/donation/pet", auth, adaptRoute(createPetControllerFactory()));
};

export { donationRoutes };
