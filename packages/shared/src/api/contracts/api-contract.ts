import { initContract } from "@ts-rest/core";
import { cardContract } from "./card-contract";
import { listContract } from "./list-contract";

export * from "./type";

const c = initContract();

export const apiContract = c.router(
  {
    card: cardContract(c),
    list: listContract(c),
  },
  {
    strictStatusCodes: true,
  },
);
