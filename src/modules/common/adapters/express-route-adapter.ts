import { type NextFunction, type Response } from "express";
import { Controller } from "../contract";
// import {httpRequestTimer} from '../config/monitoring';

export const adaptRoute = (controller: Controller) => {
  return async (req: any, res: Response, next: NextFunction) => {
    const request = {
      ...(req.body ?? {}),
      ...(req.params ?? {}),
      ...(req.query ?? {}),
      file: req.file,
      files: req.files,
      user: req?.user,
    };
    try {
      const httpResponse = await controller.handle(request);
      // const responseTimeInMs = Date.now() - req.startedAt;
      // httpRequestTimer
      //   .labels(req.method, req.route.path, res.statusCode.toString())
      //   .observe(responseTimeInMs);
      if (httpResponse.statusCode >= 200 && httpResponse.statusCode <= 299) {
        res.status(httpResponse.statusCode).json(httpResponse.body);
      } else {
        res.status(httpResponse.statusCode).json({
          message: httpResponse.body.message,
        });
      }
    } catch (error) {
      next(error);
    }
  };
};
