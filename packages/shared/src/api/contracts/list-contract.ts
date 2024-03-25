import { z } from "zod";
import { ForbiddenErrorSchema, NotFoundErrorSchema, UnauthorizedErrorSchema } from "../../utils";
import { STATUS_CODES } from "../constants";
import { ContractInstance } from "./type";
import { listSchema } from "@/db/schemas";

export const listContract = (c: ContractInstance) =>
  c.router(
    {
      createList: {
        method: "POST",
        path: "/create",
        responses: {
          [STATUS_CODES.SUCCESS]: listSchema,
          [STATUS_CODES.FORBIDDEN]: ForbiddenErrorSchema,
        },
        body: listSchema.omit({ id: true }),
      },
      updateList: {
        method: "PATCH",
        path: "/update",
        responses: {
          [STATUS_CODES.SUCCESS]: z.null(),
          [STATUS_CODES.NOT_FOUND]: NotFoundErrorSchema,
          [STATUS_CODES.UNAUTHORIZED]: UnauthorizedErrorSchema,
        },
        body: listSchema,
      },
      deleteList: {
        method: "DELETE",
        path: `/delete`,
        responses: {
          [STATUS_CODES.SUCCESS]: z.null(),
        },
        body: listSchema,
      },
      getList: {
        method: "GET",
        path: "`/get-list",
        responses: {
          [STATUS_CODES.SUCCESS]: listSchema,
          [STATUS_CODES.FORBIDDEN]: ForbiddenErrorSchema,
        },
      },
    },
    {
      pathPrefix: "/list",
    },
  );
