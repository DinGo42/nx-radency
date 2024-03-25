import { Module } from "@nestjs/common";

import { CardService } from "./card-service";
import { CardController } from "./card-controller";
import { PrismaModule } from "../prisma";

@Module({
  controllers: [CardController],
  imports: [CardModule, PrismaModule],
  providers: [CardService],
})
export class CardModule {}
