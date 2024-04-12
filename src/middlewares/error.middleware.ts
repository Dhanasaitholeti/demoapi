import { NextFunction, Request, Response } from "express";
import { generateResponse } from "../utils/generateResponse";

const ErrorMiddleware = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  res.json(generateResponse(false, err.message));
};

export default ErrorMiddleware;
