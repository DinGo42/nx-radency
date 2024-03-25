import { Module } from "@nestjs/common";

import { PrismaModule } from "../prisma";
import { ListService } from "./list-service";
import { ListController } from "./list-controller";

@Module({
  controllers: [ListController],
  imports: [ListModule, PrismaModule],
  providers: [ListService],
})
export class ListModule {}
