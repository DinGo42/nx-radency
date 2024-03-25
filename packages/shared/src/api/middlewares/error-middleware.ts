import { NextFunction, Request, Response } from "express";
import { ApiError, getErrorInfo } from "../../utils";
import { STATUS_CODES } from "../constants";
import { Injectable, NestMiddleware } from "@nestjs/common";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

@Injectable()
export class ErrorMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const { errored } = req;

    if (errored instanceof ApiError) {
      res.status(errored.statusCode).json({ message: errored.message, name: errored.name, stack: errored.stack });
      next(errored);
      return;
    }

    if (errored instanceof PrismaClientKnownRequestError) {
      const { message, name, stack, statusCode } = getErrorInfo(errored);
      res.status(statusCode).json({ message, name, stack });
      next(errored);
      return;
    }

    res.status(STATUS_CODES.SERVER_ERROR).json({ message: "Unknown server error", name: errored?.name });

    next(errored);
  }
}
