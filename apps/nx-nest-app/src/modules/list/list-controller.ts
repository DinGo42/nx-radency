import { TsRestHandler, tsRestHandler } from "@ts-rest/nest";
import { Controller } from "@nestjs/common";
import { STATUS_CODES, apiContract } from "@/shared/api";
import { ListService } from "./list-service";

@Controller()
export class ListController {
  constructor(private readonly service: ListService) {}

  @TsRestHandler(apiContract.list.createList)
  async createList() {
    return tsRestHandler(apiContract.list.createList, async ({ body }) => {
      const list = await this.service.create({
        data: body,
      });

      return { status: STATUS_CODES.SUCCESS, body: list };
    });
  }

  @TsRestHandler(apiContract.list.deleteList)
  async deleteList() {
    return tsRestHandler(apiContract.list.deleteList, async ({ body }) => {
      await this.service.delete({
        where: body,
      });

      return { status: STATUS_CODES.SUCCESS, body: null };
    });
  }

  @TsRestHandler(apiContract.list.updateList)
  async updateList() {
    return tsRestHandler(apiContract.list.updateList, async ({ body }) => {
      await this.service.update({
        data: body,
        where: {
          id: body.id,
        },
      });

      return { status: STATUS_CODES.SUCCESS, body: null };
    });
  }

  // @TsRestHandler(apiContract.list.getCard)
  // async getCard() {
  //   return tsRestHandler(apiContract.list.getCard, async ({ header }) => {
  //     await this.service.getCard({
  //       where: {
  //         id: body.id,
  //       },
  //     });

  //     return { status: STATUS_CODES.SUCCESS, body: null };
  //   });
  // }
}
