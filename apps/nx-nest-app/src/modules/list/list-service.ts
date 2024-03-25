import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma";
import { Prisma } from "@/db/prisma";

@Injectable()
export class ListService {
  constructor(private prisma: PrismaService) {}

  async create({ data }: Prisma.ListCreateArgs) {
    return await this.prisma.list.create({ data });
  }

  async delete(deleteData: Prisma.ListDeleteArgs) {
    await this.prisma.list.delete(deleteData);
  }

  async update(updateData: Prisma.ListUpdateArgs) {
    await this.prisma.list.update(updateData);
  }
  async getAll() {
    return await this.prisma.list.findMany({
      include: {
        cards: true,
      },
    });
  }
}
