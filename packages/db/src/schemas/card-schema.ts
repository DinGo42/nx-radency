import z from "zod";
import { PriorityTypes } from "../prisma";

export const cardSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  priority: z.nativeEnum(PriorityTypes),
  listId: z.string(),
});
