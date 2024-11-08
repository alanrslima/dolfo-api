import { type Request, type Response, type NextFunction } from "express";
import { logger } from "../config/logger";
import { BaseError } from "../../modules/common";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  logger.error(err);
  console.error(err);

  if (err instanceof BaseError) {
    res.status(err.statusCode).send({ errors: err.serialize() });
    res.statusCode = err.statusCode;
  } else {
    res.status(500).send({ errors: [{ message: "Something went wrong" }] });
    res.statusCode = 500;
  }
  // const responseTimeInMs = Date.now() - req.startedAt;
  // httpRequestTimer
  //   .labels(req.method, req.route.path, res.statusCode.toString())
  //   .observe(responseTimeInMs);
};
