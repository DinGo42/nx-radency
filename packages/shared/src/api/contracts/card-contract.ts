import { z } from "zod";
import { ForbiddenErrorSchema, NotFoundErrorSchema, UnauthorizedErrorSchema } from "../../utils";
import { STATUS_CODES } from "../constants";
import { ContractInstance } from "./type";
import { cardSchema } from "@/db/schemas";

export const cardContract = (c: ContractInstance) =>
  c.router(
    {
      createCard: {
        method: "POST",
        path: "/create",
        responses: {
          [STATUS_CODES.SUCCESS]: cardSchema,
          [STATUS_CODES.FORBIDDEN]: ForbiddenErrorSchema,
        },
        body: cardSchema,
      },
      updateCard: {
        method: "PATCH",
        path: "/update",
        responses: {
          [STATUS_CODES.SUCCESS]: z.null(),
          [STATUS_CODES.NOT_FOUND]: NotFoundErrorSchema,
          [STATUS_CODES.UNAUTHORIZED]: UnauthorizedErrorSchema,
        },
        body: cardSchema,
      },
      deleteCard: {
        method: "DELETE",
        path: `/delete`,
        responses: {
          [STATUS_CODES.SUCCESS]: z.null(),
        },
        body: cardSchema.pick({ id: true }),
      },
      getCard: {
        method: "GET",
        path: "`/get-card",
        responses: {
          [STATUS_CODES.SUCCESS]: cardSchema,
          [STATUS_CODES.FORBIDDEN]: ForbiddenErrorSchema,
        },
      },
    },
    {
      pathPrefix: "/card",
    },
  );
