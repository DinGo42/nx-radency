import z from "zod";

export const listSchema = z.object({
  id: z.string(),
  title: z.string(),
});
