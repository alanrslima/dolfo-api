import { type Express, Router } from "express";
import { donationRoutes } from "../../modules/donation";
import { authRoutes } from "../../modules/auth";
// import {readdirSync} from 'fs';

export default (app: Express): void => {
  const router = Router();
  app.use("/api", router);
  (async function () {
    donationRoutes(router);
    authRoutes(router);
  })();

  // readdirSync(`${__dirname}/../routes`).map(async file => {
  //   if (!file.endsWith('.map')) {
  //     (await import(`../routes/${file}`)).default(router);
  //   }
  // });
};
