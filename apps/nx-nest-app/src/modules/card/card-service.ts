import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma";
import { Prisma } from "@/db/prisma";

@Injectable()
export class CardService {
  constructor(private prisma: PrismaService) {}

  async create({ data }: Prisma.CardCreateArgs) {
    return await this.prisma.card.create({ data });
  }

  async delete(deleteData: Prisma.CardDeleteArgs) {
    await this.prisma.card.delete(deleteData);
  }

  async update(updateData: Prisma.CardUpdateArgs) {
    await this.prisma.card.update(updateData);
  }

  async getCard(cardData: Prisma.CardFindFirstArgs) {
    await this.prisma.card.findFirst(cardData);
  }
}
