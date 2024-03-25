import { TsRestHandler, tsRestHandler } from "@ts-rest/nest";
import { Controller } from "@nestjs/common";
import { CardService } from "./card-service";
import { STATUS_CODES, apiContract } from "@/shared/api";

@Controller()
export class CardController {
  constructor(private readonly service: CardService) {}

  @TsRestHandler(apiContract.card.createCard)
  async createCard() {
    return tsRestHandler(apiContract.card.createCard, async ({ body }) => {
      const card = await this.service.create({
        data: body,
      });

      return { status: STATUS_CODES.SUCCESS, body: card };
    });
  }

  @TsRestHandler(apiContract.card.deleteCard)
  async deleteCard() {
    return tsRestHandler(apiContract.card.deleteCard, async ({ body }) => {
      await this.service.delete({
        where: body,
      });

      return { status: STATUS_CODES.SUCCESS, body: null };
    });
  }

  @TsRestHandler(apiContract.card.updateCard)
  async updateCard() {
    return tsRestHandler(apiContract.card.updateCard, async ({ body }) => {
      await this.service.update({
        data: body,
        where: {
          id: body.id,
        },
      });

      return { status: STATUS_CODES.SUCCESS, body: null };
    });
  }

  // @TsRestHandler(apiContract.card.getCard)
  // async getCard() {
  //   return tsRestHandler(apiContract.card.getCard, async ({ header }) => {
  //     await this.service.getCard({
  //       where: {
  //         id: body.id,
  //       },
  //     });

  //     return { status: STATUS_CODES.SUCCESS, body: null };
  //   });
  // }
}
